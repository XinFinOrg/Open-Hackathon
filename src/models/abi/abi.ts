export const balanceOfABI = '{ "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const mintTokenABI = '{ "constant": false, "inputs": [ { "name": "newTokenURI", "type": "string" } ], "name": "mintNewItem", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }';
export const tokenURIABI = '{ "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }';
export const lastTokenIdABI = '{ "constant": true, "inputs": [], "name": "getLastTokenId", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const ownerOfABI = '{ "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }';
export const tokenCreatorABI = '{ "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "tokenCreator", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const getApprovedABI = '{ "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const isApprovedAllABI = '{ "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const approveABI = '{ "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }';
export const postForSaleABI = '{"constant": false, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_tokenAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_askingPrice", "type": "uint256" } ], "name": "postForSale", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}';
export const isForSaleABI = '{ "constant": true, "inputs": [ { "name": "_tokenContract", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "isForSale", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const getAskingPriceABI = '{ "constant": true, "inputs": [ { "name": "_tokenContract", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "getAskingPrice", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }';
export const removeFromSaleABI = '{ "constant": false, "inputs": [ { "name": "_tokenAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "cancelSale", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }';
export const transferABI = '{ "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }';
export const buyItemABI = '{ "constant": false, "inputs": [ { "name": "_tokenAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_expectedPrice", "type": "uint256" } ], "name": "buyItem", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }';