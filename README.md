# rebranded-portfolio
beautiful and intuitive simple portfolio

so i decided to rebrand my portfolio and make it better.. the process wasnt easy but i did it

built with html, css, javascript




// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract KokoNFT is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("KokoNFT", "BNF") {}

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}








// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlockgamesNFT is ERC20, Ownable {
    constructor() ERC20("blockgamesNFT", "nfc") {}

   function buyToken(address _recipient) public payable {
    uint256 amount = msg.value; // msg.value is the value of ether sent to the contract during the function invocation
}
     


}










// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Payable {
    // Payable address can receive Ether
    address payable public owner;

    // Payable constructor can receive Ether
    constructor() payable {
        owner = payable(msg.sender);
    }
     
     
    function buyToken(address _recipient) public payable {
    uint256 amount = msg.value; // msg.value is the value of ether sent to the contract during the function invocation
}
     


     function balanceOf(address _owner) public view returns (uint256 balance) {
          return _owner.balance;
     }
}


