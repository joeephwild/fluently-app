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

interface FluentToken {
    function distributeToken(address[] calldata recipients) external;
}

contract FluentAccount is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    string private _baseTokenURI;
    uint8 rating;
    address[] users;

    function distributeToken(address[] calldata recipients, address _contracts) public {
       IERC20 token = IERC20(_contracts);
       uint256 amount = 100000000000000000;
        for (uint i = 0; i < recipients.length; i++) {
            require(recipients[i] != address(0), "Recipient address cannot be zero");
            token.transfer(recipients[i], amount);
        }
    }

    constructor(string memory baseTokenURI) ERC721("FluentToken", "FTK") {
        _baseTokenURI = baseTokenURI;
    }

    /// @dev Returns the base URI for the token.
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    /// @dev Struct to store the user's required data.
    struct Account {
        string imageUri;
        string language;
        string fullName;
        string nativeLanguage;
        uint256 userId;
    }

    struct CallSchema {
        uint256 time;
        string language;
        address user;
        bool matched;
    }

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
        uint256 tokenId = _tokenIdCounter.current();
        Account storage profile = userProfiles[msg.sender];
        profile.fullName = _fullName;
        profile.imageUri = _imageUri;
        profile.language = _language;
        profile.nativeLanguage = _nativeLanguage;
        profile.userId = tokenId;
        _mint(msg.sender, tokenId);
        _tokenIdCounter.increment();
        users.push(msg.sender);
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