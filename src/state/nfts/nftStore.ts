//import { BigNumber } from 'ethers';
import { action, makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from "uuid";
import app from '../../app';
import { TokenDetails, TokenDetailsFactory } from '../../models';
import { getLastTokenIdMinted, getMetaDataFromTokenId } from "../../utils/helpers/xdc3";

export interface INFTStore {
  allNFTs: TokenDetails[];
  details: TokenDetails;
  lastTokenMinted: number;
  lastTokenLoaded: number;
}

export class NFTStore implements INFTStore {
  id = uuidv4();
  allNFTs: TokenDetails[] = [];
  details = new TokenDetails();
  lastTokenMinted = 0;
  lastTokenLoaded = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action async loadAllNFTs(): Promise<void> {
    console.log('loadAllNFTs');
    this.allNFTs = [];
    if (app.xdc3.isConnected()) {
      this.lastTokenMinted = await getLastTokenIdMinted();
      this.loadMoreTokens();
    }
  }

  @action async loadMoreTokens(): Promise<void> {
    if (this.lastTokenLoaded < this.lastTokenMinted) {
      for (let i = 12; i > 0; i--) {
        if (this.lastTokenLoaded < this.lastTokenMinted) {
          const tokenIdToLoad = this.lastTokenLoaded + 1;
          await this.loadNextToken(tokenIdToLoad);
        }
      }
    }
  }

  @action async loadNextToken(tokenIdToLoad: number): Promise<void> {
    const token = await this._getNFTFomTokenId(tokenIdToLoad);
    this.allNFTs.push(token);
    this.lastTokenLoaded++;
  }

  @action handlePriceChange(newPrice: number): void {
    if (app.nft.details.status && newPrice) {
      app.nft.details.status.nativePrice = newPrice;
      app.nft.details.status.askingPrice = app.xdc3.convertXDCToWEI(newPrice.toString());
    }
  }

  @action setActiveNFT(nft: TokenDetails): void {
    this.details = nft;
  }

  async _getNFTFomTokenId(_tokenId: number): Promise<TokenDetails> {
    const metaData = await getMetaDataFromTokenId(_tokenId);
    return await TokenDetailsFactory.fromMetaDataHash(_tokenId, metaData, app.xdc3.address);
  }

}