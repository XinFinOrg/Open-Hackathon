
import app from "../../app";
import { v4 as uuidv4 } from "uuid";
import { makeAutoObservable } from "mobx";
import { getApprovedForTokenId, getAskingPrice, getIsForSale, getOwnerAddressFromTokenId, isApprovedAllForTokenId } from "../../utils/helpers/xdc3";

//** NTF Item Class Model */
export class TokenStatus {
  id = uuidv4();
  contractAddress: string
  tokenId: number
  isForSale = false;
  userIsOwner = false;
  approved = false;
  approvedAddress = '';
  isApprovedForAll = false;
  nativePrice = 0;
  askingPrice = '0';

  constructor(contractAddress: string, tokenId: number, userAddress: string) {
    this.contractAddress = contractAddress;
    this.tokenId = tokenId;
    makeAutoObservable(this);
    this.initializeToken(userAddress);
  }

  async initializeToken(userAddress: string): Promise<void> {
    this._setForSaleStatus();
    this._verifyOwnerApproval(userAddress);
  }

  async _verifyOwnerApproval(userAddress: string): Promise<void> {
    try {
      const ownerAddress = await getOwnerAddressFromTokenId(this.tokenId);
      this.userIsOwner = ownerAddress.toLowerCase() == userAddress.toLowerCase();
      this.approvedAddress = await getApprovedForTokenId(this.tokenId);
      this.isApprovedForAll = await isApprovedAllForTokenId(ownerAddress, app.vars.marketplaceContractAddress);
      this.approved = this.approvedAddress.toLowerCase() === app.vars.marketplaceContractAddress.toLowerCase();
    } catch (error) {
      console.log('Error ', error);
    }
  }

  forSaleIsValid(): boolean {
    return this.isForSale && this.getIsApproved();
  }

  ownerAndForSaleIsValid(): boolean {
    return this.isForSale && this.getIsApproved() && this.userIsOwner;
  }

  getDisplayFormattedPrice(): string {
    return app.xdc3.convertWEIToXDC(this.askingPrice.toString());
  }

  getPriceInNative(): number {
    if (app) {
      return parseFloat(app.xdc3.convertWEIToXDC(this.askingPrice.toString()));
    } else {
      return 0;
    }
  }


  getIsApproved(): boolean {
    return this.approved || this.isApprovedForAll;
  }

  async _setForSaleStatus(): Promise<void> {
    this.isForSale = await getIsForSale(this.tokenId);
    if (this.isForSale) {
      this.askingPrice = await getAskingPrice(app.vars.tokenContractAddress, this.tokenId);
    }
  }


}