// SPDX-License-Identifier: MIT
pragma solidity ^0.4.24;

import "./IERC721.sol";
import "./Counters.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";

interface ITokenContract {
    function transferFrom(address from, address to, uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external view returns (address);
}

contract Marketplace {
    using Counters for Counters.Counter;
    Counters.Counter private _marketplaceCounter;

    struct TokenDetails {
        bool isForSale;
        address owner;
        address tokenAddress;
        uint256 tokenId;
        uint256 askingPrice;
        uint256 marketplaceId;
    }
    //Each individual token will be assigned a marketplaceId
    //This will be our UID for internal tracking 
    //It will be assigned incrementally using the counter and mapped to it's Id here.
    //Mapping from Contract address contract tokenId to marketplaceId
    mapping(address => mapping(uint256 => uint256)) public tokenMarketPlaceIds;

    //Mapping by marketplace listing by Id to token details.
    mapping(uint256 => TokenDetails) public marketplaceTokens;

// region
    event FixedPriceItemAdded(uint256 id, uint256 tokenId, address tokenAddress, uint256 askingPrice);
    event FixedPriceItemSold(uint256 id, uint256 tokenId, address tokenAddress, uint256 salePrice);
    event AuctionItemCancelled(uint256 id, uint256 tokenId, address tokenAddress );

   function isTokenOwner(address _tokenContract, uint256 _tokenId) public view returns(bool) {
        address tokenOwner = IERC721(_tokenContract).ownerOf(_tokenId);
       return tokenOwner == msg.sender;
    }
   function hasTransferApproval(address _tokenContract, uint256 _tokenId) public view returns(bool) {
        IERC721 tokenContract = IERC721(_tokenContract);
        bool isOwner = tokenContract.ownerOf(_tokenId) == msg.sender;
        bool hasApproval = tokenContract.getApproved(_tokenId) == address(this);
        bool approvedForAll = tokenContract.isApprovedForAll(msg.sender, address(this));
        return (isOwner || hasApproval || approvedForAll);
    }
    function tokenOwnerMatchesListingOwner(address _tokenAddress, uint256 _tokenId) public view returns(bool) {
        uint256 marketPlaceId = getMarketplaceId(_tokenAddress,_tokenId);
        ITokenContract tokenContract = ITokenContract(marketplaceTokens[marketPlaceId].tokenAddress);
        address tokenOwner = tokenContract.ownerOf(_tokenId);
        address listingOwner = marketplaceTokens[marketPlaceId].owner;
        return tokenOwner == listingOwner;
    }    
    function isForSale(address _tokenContract, uint256 _tokenId) public view returns(bool) {
        uint256 marketPlaceId = getMarketplaceId(_tokenContract, _tokenId);
        TokenDetails memory token = marketplaceTokens[marketPlaceId];
        return token.isForSale && tokenOwnerMatchesListingOwner(_tokenContract, _tokenId);
    }
    function getAskingPrice(address _tokenContract, uint256 _tokenId) public view returns(uint256) {
        uint256 marketPlaceId = getMarketplaceId(_tokenContract, _tokenId);
        TokenDetails memory token = marketplaceTokens[marketPlaceId];
        return token.askingPrice;
    }

    function getMarketplaceId(address _tokenAddress, uint256 _tokenId) public view returns (uint256) {
         return tokenMarketPlaceIds[_tokenAddress][_tokenId];
    }

    function postForSale(address _owner, address _tokenAddress, uint256 _tokenId, uint256 _askingPrice) external {
        require(!this.isForSale(_tokenAddress, _tokenId), "Token is already for sale");
        if(msg.sender !=_tokenAddress){
        IERC721 tokenContract = IERC721(_tokenAddress);
        bool isOwner = tokenContract.ownerOf(_tokenId) == msg.sender;
        bool hasApproval = tokenContract.getApproved(_tokenId) == address(this);
        bool approvedForAll = tokenContract.isApprovedForAll(msg.sender, address(this));
        require(isOwner || hasApproval || approvedForAll, "Error: must have transfer approval or be the owner");
        }
        uint256 marketPlaceId = getMarketplaceId(_tokenAddress,_tokenId);
               if(marketPlaceId == 0) {
                 _marketplaceCounter.increment();
                 marketPlaceId = _marketplaceCounter.current();
                TokenDetails memory newToken = TokenDetails(true, _owner, _tokenAddress, _tokenId, _askingPrice, marketPlaceId);
                marketplaceTokens[marketPlaceId] = newToken;
                tokenMarketPlaceIds[_tokenAddress][_tokenId] = marketPlaceId;
               }else{
                require(marketplaceTokens[marketPlaceId].isForSale == false, "Item is already for sale");
                marketplaceTokens[marketPlaceId].askingPrice = _askingPrice;
                marketplaceTokens[marketPlaceId].isForSale = true;
                marketplaceTokens[marketPlaceId].owner = _owner;
                }
        emit FixedPriceItemAdded(marketplaceTokens[marketPlaceId].marketplaceId, _tokenId, _tokenAddress, _askingPrice);
        
        assert(marketplaceTokens[marketPlaceId].marketplaceId == marketPlaceId);
    }  
    
    function cancelSale(address _tokenAddress, uint256 _tokenId) public {
        require(hasTransferApproval(_tokenAddress, _tokenId), "Error: must have transfer approval or be the owner");
        uint256 marketPlaceId = getMarketplaceId(_tokenAddress,_tokenId);
        TokenDetails storage token = marketplaceTokens[marketPlaceId];
        token.isForSale = false;
        token.askingPrice = 0;
    }

    function buyItem(address _tokenAddress, uint256 _tokenId, uint256 _expectedPrice) external payable {
        uint256 marketPlaceId = getMarketplaceId(_tokenAddress,_tokenId);
        ITokenContract tokenContract = ITokenContract(marketplaceTokens[marketPlaceId].tokenAddress);
        address listingOwner = marketplaceTokens[marketPlaceId].owner;
        require(this.isForSale(_tokenAddress, _tokenId), "Token is not for sale");
        require(msg.sender != listingOwner, "Can't sell to owner");
        require(msg.value >= marketplaceTokens[marketPlaceId].askingPrice, "Price Changed");
        marketplaceTokens[marketPlaceId].isForSale = false;
        tokenContract.transferFrom(marketplaceTokens[marketPlaceId].owner, msg.sender, marketplaceTokens[marketPlaceId].tokenId);
        require(msg.value >= marketplaceTokens[marketPlaceId].askingPrice, "Not Enough XDC Sent");
        uint ownerBalance = (_expectedPrice); 
        address ownerAddress = marketplaceTokens[marketPlaceId].owner;
       bool wasSent = ownerAddress.send(ownerBalance);
       require(wasSent, "Failed to send XDC");
    }
}