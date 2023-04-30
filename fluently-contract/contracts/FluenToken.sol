// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * @title FLUENTOKEN
 * @dev The FLUENTOKEN ERC20 token contract.
 */
contract FLUENTOKEN is ERC20, Pausable, Ownable {
    using SafeMath for uint256;

    uint256 public constant MAX_RECIPIENTS = 1000;  // Maximum number of recipients in a single distribution

    /**
     * @dev Initializes the FLUENTOKEN contract and mints initial tokens to the contract itself.
     */
    constructor() ERC20("FLUENTOKEN", "FTK") {
        _mint(address(this), 2000000 * 10 ** decimals());
    }

    /**
     * @dev Pauses all token transfers.
     *
     * Requirements:
     * - The caller must be the contract owner.
     */
    function pause() public onlyOwner {
        _pause();
    }

    /**
     * @dev Unpauses all token transfers.
     *
     * Requirements:
     * - The caller must be the contract owner.
     */
    function unpause() public onlyOwner {
        _unpause();
    }

    /**
     * @dev Mints new tokens and adds them to the contract's balance.
     *
     * Requirements:
     * - The caller must be the contract owner.
     */
    function mint(uint256 amount) public onlyOwner {
        _mint(address(this), amount);
    }

    /**
     * @dev Distributes a fixed amount of tokens to an array of recipients.
     *
     * Requirements:
     * - The caller must have sufficient balance to cover the distribution.
     * - The number of recipients must not exceed MAX_RECIPIENTS.
     * - Each recipient address must not be the zero address.
     *
     * @param recipients An array of recipient addresses to distribute tokens to.
     */
    function distributeToken(address[] calldata recipients) public {
        require(recipients.length > 0, "No recipients provided");
        require(recipients.length <= MAX_RECIPIENTS, "Too many recipients");
        uint256 amount = 100000000000000000; // 0.1 token with 18 decimal places

        for (uint i = 0; i < recipients.length; i++) {
            require(recipients[i] != address(0), "Recipient address cannot be zero");
            _transfer(address(this), recipients[i], amount);
        }
    }

    /**
     * @dev Hook to be called before any token transfer.
     * Prevents token transfers while the contract is paused.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}