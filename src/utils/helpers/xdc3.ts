
import { sendTransaction } from './xdc3SendTx';
import app from '../../app';
import { readContract } from './xdc3CallTx';
import { removeFromSaleABI, mintTokenABI, buyItemABI, transferABI, tokenURIABI, lastTokenIdABI, ownerOfABI, tokenCreatorABI, getApprovedABI, isApprovedAllABI, approveABI, postForSaleABI, isForSaleABI, getAskingPriceABI } from '../../models/abi/abi';
import xdc3 from 'xdc3';
const x3 = new xdc3();

export const getTokenURI = async (tokenId: number): Promise<string> => {
  const functionCallEncoded = getEncodedFunctionCall(tokenURIABI, [tokenId]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };

  return readContract(tx);
};
export const mintToken = async (uri: string): Promise<void> => {
  const functionCallEncoded = getEncodedFunctionCall(mintTokenABI, [uri]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  return await sendTransaction(tx);
};
export const getLastTokenIdMinted = async (): Promise<number> => {
  const functionCallEncoded = getEncodedFunctionCall(lastTokenIdABI, []);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const txResult = await readContract(tx);
    const decoded: unknown = x3.eth.abi.decodeParameter("uint256", txResult);
    return decoded as number;
  } catch (error) {
    console.log('Error ', error);
    return error;
  }
};
export const getOwnerAddressFromTokenId = async (_tokenId: number): Promise<string> => {
  const functionCallEncoded = getEncodedFunctionCall(ownerOfABI, [_tokenId]); const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const txResult = await readContract(tx);
    const decoded = x3.eth.abi.decodeParameter("address", txResult); // here "address" is the type of parameter
    return decoded.toString();
  } catch (error) {
    console.log('Error ', error);
    return 'Error';
  }
};
export const getCreatorAddressFromTokenId = async (_tokenId: number): Promise<string> => {
  const functionCallEncoded = getEncodedFunctionCall(tokenCreatorABI, [_tokenId]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const txResult = await readContract(tx);
    const decoded = x3.eth.abi.decodeParameter("address", txResult); // here "address" is the type of parameter
    return decoded.toString();
  } catch (error) {
    console.log('Error ', error);
    return 'Error';
  }
};
export const getApprovedForTokenId = async (_tokenId: number): Promise<string> => {
  const functionCallEncoded = getEncodedFunctionCall(getApprovedABI, [_tokenId]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const txResult = await readContract(tx);
    const decoded = x3.eth.abi.decodeParameter("address", txResult); // here "address" is the type of parameter
    return decoded.toString();
  } catch (error) {
    console.log('Error ', error);
    return 'Error';
  }
};
export const isApprovedAllForTokenId = async (ownerAddress: string, operatorAddress: string): Promise<boolean> => {
  const functionCallEncoded = getEncodedFunctionCall(isApprovedAllABI, [ownerAddress, operatorAddress]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const txResult = await readContract(tx);
    const decoded: unknown = x3.eth.abi.decodeParameter("bool", txResult); // here "address" is the type of parameter
    return decoded as boolean;
  } catch (error) {
    console.log('Error ', error);
    return false;
  }
};
export const getMetaDataFromTokenId = async (_tokenId: number): Promise<Record<string, any>> => {
  const functionCallEncoded = getEncodedFunctionCall(tokenURIABI, [_tokenId]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const metaDataHash = await readContract(tx);
    const decoded = x3.eth.abi.decodeParameter("string", metaDataHash); // here "string" is the type of parameter
    const uri = `${app.vars.baseURI}${decoded}`;
    const result = await fetch(uri);
    const metaData = await result.json();
    return metaData;
  } catch (error) {
    console.log('Error ', error);
    return error;
  }
};
export const getAskingPrice = async (tokenContract: string, _tokenId: number): Promise<string> => {
  const functionCallEncoded = getEncodedFunctionCall(getAskingPriceABI, [tokenContract, _tokenId]);
  const tx = {
    to: app.vars.marketplaceContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const askingPrice = await readContract(tx);
    const decoded: unknown = x3.eth.abi.decodeParameter("uint256", askingPrice); // here "string" is the type of parameter
    return decoded as string;
  } catch (error) {
    console.log('Error ', error);
    return error;
  }
};

export const getIsForSale = async (_tokenId: number): Promise<boolean> => {
  const functionCallEncoded = getEncodedFunctionCall(isForSaleABI, [app.vars.tokenContractAddress, _tokenId]);
  const tx = {
    to: app.vars.marketplaceContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    const isForSale = await readContract(tx);
    const decoded: unknown = x3.eth.abi.decodeParameter("bool", isForSale); // here "string" is the type of parameter
    return decoded as boolean;
  } catch (error) {
    console.log('Error ', error);
    return error;
  }
};
const getEncodedFunctionCall = (functionABI: string, paramData: any[]) => {
  const parsedABI = JSON.parse(functionABI);
  return x3.eth.abi.encodeFunctionCall(parsedABI, paramData);
};

export const approveOperatorForToken = async (operatorAddressToApprove: string, tokenIdToApprove: number): Promise<void> => {
  const functionCallEncoded = getEncodedFunctionCall(approveABI, [operatorAddressToApprove, tokenIdToApprove]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    await sendTransaction(tx);
  } catch (error) {
    console.log('Error ', error);
  }
};

export const sendTransferTransaction = async (transferToAddress: string): Promise<any> => {
  const functionCallEncoded = getEncodedFunctionCall(transferABI, [app.nft.details.ownerAddress, transferToAddress, app.nft.details.tokenId]);
  const tx = {
    to: app.vars.tokenContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    await sendTransaction(tx);
  } catch (error) {
    console.log('Error ', error);
  }
};

export const removeFromSale = async (): Promise<void> => {
  const functionCallEncoded = getEncodedFunctionCall(removeFromSaleABI, [app.vars.tokenContractAddress, app.nft.details.tokenId]);
  const tx = {
    to: app.vars.marketplaceContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    await sendTransaction(tx);
  } catch (error) {
    console.log('Error ', error);
  }
};

export const buyItem = async (): Promise<void> => {
  const functionCallEncoded = getEncodedFunctionCall(buyItemABI, [app.vars.tokenContractAddress, app.nft.details.tokenId, app.nft.details.status?.askingPrice]);
  const tx = {
    to: app.vars.marketplaceContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    await sendTransaction(tx);
  } catch (error) {
    console.log('Error ', error);
  }
};

export const postForSaleTransaction = async (): Promise<any> => {
  console.log('app.nft.details.status?.askingPrice ', app.nft.details.status?.askingPrice);
  const functionCallEncoded = getEncodedFunctionCall(postForSaleABI, [app.xdc3.address, app.vars.tokenContractAddress, app.nft.details.tokenId, app.nft.details.status?.askingPrice]);
  const tx = {
    to: app.vars.marketplaceContractAddress,
    from: app.xdc3.address,
    data: functionCallEncoded
  };
  try {
    await sendTransaction(tx);
  } catch (error) {
    console.log('Error ', error);
  }
};