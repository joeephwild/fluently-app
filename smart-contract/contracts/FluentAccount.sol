// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @title FluentAccount
/// @author Joseph Omotade
/// @notice A contract for creating and managing user accounts for the Fluent platform.

contract FluentAccount is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    string private _baseTokenURI;

    constructor(string memory baseTokenURI) ERC721("FluentToken", "FTK") {
        _baseTokenURI = baseTokenURI;
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
    }

    struct Meeting {
        address user;
        string language;
        string nativeLanguage;
        MatchStatus matchStatus;
        uint256 matchId;
        uint256 time;
    }

    Meeting[] private allMeetings;
    Account[] private allUsers;
    mapping(address => Account) private userProfiles;

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
        Account storage profile = userProfiles[msg.sender];
        profile.fullName = _fullName;
        profile.imageUri = _imageUri;
        profile.language = _language;
        profile.nativeLanguage = _nativeLanguage;
        uint256 tokenId = _tokenIdCounter.current();
        _mint(msg.sender, tokenId);
        _tokenIdCounter.increment();
        allUsers.push(profile);
    }

    mapping(string => mapping(uint256 => Meeting[]))
        private meetingsByLanguageAndTime;

    function createMeeting(
        string memory _language,
        string memory _nativeLanguage,
        uint256 _time
    ) external {
        Meeting memory newMeeting = Meeting({
            user: msg.sender,
            language: _language,
            nativeLanguage: _nativeLanguage,
            matchStatus: pending,
            matchId: 0,
            time: _time
        });
        meetingsByLanguageAndTime[_language][_time].push(newMeeting);
    }

    function matchUsers(string memory _language, uint256 _time) external {
        Meeting[] storage meetings = meetingsByLanguageAndTime[_language][
            _time
        ];
        for (uint256 i = 0; i < meetings.length; i++) {
            Meeting storage meeting1 = meetings[i];
            if (meeting1.matchStatus == matched) {
                continue;
            }
            for (uint256 j = i + 1; j < meetings.length; j++) {
                Meeting storage meeting2 = meetings[j];
                if ((meeting2.matchStatus) == matched) {
                    continue;
                }
                if (
                    (meeting1.nativeLanguage) == (meeting2.language) &&
                    (meeting2.nativeLanguage) == (meeting1.language)
                ) {
                    meeting1.matchStatus = matched;
                    meeting1.matchId = i + 1;
                    meeting2.matchStatus = matched;
                    meeting2.matchId = i + 1;
                    break;
                }
            }
        }
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
