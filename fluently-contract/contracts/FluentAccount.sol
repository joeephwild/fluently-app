///////////////////////////////////////////////////////////
//                                                       //
//     Built by joseph omotae                            //
//     Powered by Filecoin (https://filecoin.io/)        //
//                                                       //
///////////////////////////////////////////////////////////

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title FluentAccount
/// @author Joseph Omotade
/// @notice A contract for creating and managing user accounts for the Fluent platform.

contract FluentAccount is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    string private _baseTokenURI;
    address tokenAddress;
    uint8 rating;

    constructor(
        string memory baseTokenURI,
        address _tokenAddress
    ) ERC721("FluentToken", "FTK") {
        _baseTokenURI = baseTokenURI;
        tokenAddress = _tokenAddress;
    }

    /// @dev Returns the base URI for the token.
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    enum MatchStatus {
        pending,
        matched
    }

    /// @dev Struct to store the user's required data.
    struct Account {
        string imageUri;
        string language;
        string fullName;
        string nativeLanguage;
        uint256 userId;
    }

    struct Meeting {
        address user;
        string language;
        string nativeLanguage;
        MatchStatus matchStatus;
        uint256 matchId;
        uint256 time;
        string meetingLink;
        bool userMatched;
    }

    Meeting[] allMeetings;
    Account[] private allUsers;
    mapping(address => Account) private userProfiles;
    mapping(address => Meeting) allMeetingsByUser;
    mapping(address => Meeting[]) allMeetingsByAUser;
    mapping(address => mapping(uint256 => Meeting[])) userMeetingById;

    /// @dev Creates a new account for the caller.
    /// @param _imageUri The user profile image;
    /// @param _language The user selected anguage to learn;
    /// @param _fullName The user fullName;
    /// @param _nativeLanguage  The user native language;
    function createAccount(
        string memory _imageUri,
        string memory _language,
        string memory _fullName,
        string memory _nativeLanguage
    ) external {
        uint256 tokenId = _tokenIdCounter.current();
        Account storage profile = userProfiles[msg.sender];
        profile.fullName = _fullName;
        profile.imageUri = _imageUri;
        profile.language = _language;
        profile.nativeLanguage = _nativeLanguage;
        profile.userId = tokenId;
        _mint(msg.sender, tokenId);
        _tokenIdCounter.increment();
        allUsers.push(profile);
    }

    function updateAccount(
        string memory _imageUri,
        string memory _language,
        string memory _fullName,
        string memory _nativeLanguage
    ) external {
        Account storage profile = userProfiles[msg.sender];
        profile.fullName = _fullName;
        profile.imageUri = _imageUri;
        profile.language = _language;
        profile.nativeLanguage = _nativeLanguage;
    }

    mapping(string => mapping(uint256 => Meeting[]))
        private meetingsByLanguageAndTime;

    /// @param a represent the first string to be compared to the second string
    /// @param b represent the second string to be compared to the first string
    function compareStrings(
        string memory a,
        string memory b
    ) public pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function createMeeting(
        string memory _language,
        string memory _nativeLanguage,
        string memory _meetingLink,
        uint256 _time
    ) public returns (bool) {
        Meeting storage newMeeting = allMeetingsByUser[msg.sender];
        newMeeting.user = msg.sender;
        newMeeting.language = _language;
        newMeeting.nativeLanguage = _nativeLanguage;
        newMeeting.matchStatus = MatchStatus.pending;
        newMeeting.matchId = 0;
        newMeeting.time = _time;
        allMeetings.push(newMeeting);

        uint256 i;
        uint256 j;
        require(allMeetings.length > 0, "no meeting available");
        for (i = 0; i < allMeetings.length; i++) {
            for (j = i + 1; j < allMeetings.length; j++) {
                // Skip over the same meeting and meetings that are already mat
                if (
                    allMeetings[i].time != allMeetings[j].time ||
                    allMeetings[i].matchStatus == MatchStatus.matched ||
                    allMeetings[j].matchStatus == MatchStatus.matched ||
                    allMeetings[i].user == allMeetings[j].user
                ) {
                    continue;
                }

                // If the two users have a common language, create a match
                if (
                    compareStrings(
                        allMeetings[i].nativeLanguage,
                        allMeetings[j].language
                    ) &&
                    compareStrings(
                        allMeetings[i].language,
                        allMeetings[j].nativeLanguage
                    )
                ) {
                    // Assign the two meetings a common matchId and update their match status
                    allMeetings[i].matchId = i;
                    allMeetings[j].matchId = j;
                    allMeetings[i].matchStatus = MatchStatus.matched;
                    allMeetings[j].matchStatus = MatchStatus.matched;
                    allMeetings[i].userMatched = true;
                    allMeetings[j].userMatched = true;
                    allMeetings[i].meetingLink = _meetingLink;
                    allMeetings[j].meetingLink = _meetingLink;
                }
            }
        }
        return newMeeting.userMatched;
    }

    function _allMeetings() public view returns (Meeting[] memory) {
        return allMeetings;
    }

    function getMatchedMeeting(address _user) public view returns (bool) {
        require(allMeetingsByUser[_user].userMatched == true, "not matched");
        return allMeetingsByUser[_user].userMatched;
    }

    /// @dev Gets all the created accounts.
    function getAllUsers() external view returns (Account[] memory) {
        return allUsers;
    }

    /// @param _owner the address of the user you wanna recieve
    function getAUserProfile(
        address _owner
    ) external view returns (Account memory) {
        return userProfiles[_owner];
    }

    function distributeToken(address[] calldata recipients) public {
        IERC20 token = IERC20(tokenAddress);
        uint256 amount = 100000000000000000;
        for (uint i = 0; i < recipients.length; i++) {
            require(
                recipients[i] != address(0),
                "Recipient address cannot be zero"
            );
            token.transfer(recipients[i], amount);
        }
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
