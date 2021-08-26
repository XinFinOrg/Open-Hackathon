import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import app from "../../app";
import { TokenStatus } from "..";

//** NTF Item Class Model */
export class TokenDetails {
  id = uuidv4();
  title = "";
  description = "";
  fileHash = "";
  ownerAddress = "";
  creatorAddress = "";
  thumbnail = "";
  fileType = "";
  tokenId = 0;
  status?: TokenStatus;
  // price: TokenPrice;

  constructor() {
    makeAutoObservable(this);
  }


  getNFTFileURL(baseUri: string): string {
    return baseUri + this.fileHash;
  }

  isOwner(address: string): boolean {
    return this.ownerAddress == address;
  }
}

export class TokenDetailsFactory {

  static async fromMetaDataHash(_tokenId: number, metaData: Record<string, any>, userAddress: string): Promise<TokenDetails> {
    const itemToReturn: TokenDetails = new TokenDetails();
    itemToReturn.title = metaData.item;
    itemToReturn.description = metaData.description;
    itemToReturn.fileHash = metaData.fileHash;
    itemToReturn.ownerAddress = "";
    itemToReturn.creatorAddress = "";
    itemToReturn.thumbnail = "";
    itemToReturn.tokenId = _tokenId;
    itemToReturn.status = new TokenStatus(app.vars.tokenContractAddress, _tokenId, userAddress);
    return itemToReturn;
  }
}
