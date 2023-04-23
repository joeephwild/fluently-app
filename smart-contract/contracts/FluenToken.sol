// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract FLUENTOKEN is ERC20, Pausable, Ownable {
    using SafeMath for uint256;

    uint256 public constant MAX_RECIPIENTS = 1000;

    constructor() ERC20("FLUENTOKEN", "FTK") {
        _mint(address(this), 2000000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function distributeToken(address[] calldata recipients) external whenNotPaused {
        require(recipients.length > 0, "No recipients provided");
        require(recipients.length <= MAX_RECIPIENTS, "Too many recipients");
        uint256 amount = 1 * 10 ** decimals(); // 0.1 token with 18 decimal places

        for (uint i = 0; i < recipients.length; i++) {
            assert(
                recipients[i] != address(0)
            );
            _transfer(address(this), recipients[i], amount);
        }
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
