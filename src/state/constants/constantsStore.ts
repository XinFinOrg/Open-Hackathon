import { action, computed, makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from "uuid";
import app from '../../app';
import { getPinataAPIKey, getPinataAPISecret } from '../../configs/pinataConfig';

export interface IConstantsStore {
  baseURI: string;
  // userAddress: string;
  tokenContractAddress: string
  marketplaceContractAddress: string
  pinataApiKey: string
  pinataApiSecret: string
}

export class ConstantsStore implements IConstantsStore {
  id = uuidv4();
  baseURI = 'https://ipfs.io/ipfs/';
  tokenContractAddress = '0x50d366a72012dfddae856e5e4525e8d01b698560';
  marketplaceContractAddress = '0xc61029dfa3bec30c7a26a69227f9f9f114c892de';
  isOpen = false;
  modalToShow = '';
  pinataApiKey = '';
  //userAddress = '';
  pinataApiSecret = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action initializeVars(): void {
    this.pinataApiKey = getPinataAPIKey();
    this.pinataApiSecret = getPinataAPISecret();
    app.nft.loadAllNFTs();
  }

  @computed getImageUrlFromIPFSHash(ipfsHash: string): string {
    return this.baseURI + ipfsHash;
  }

  @action closeModal(): void {
    this.isOpen = false;
  }

  @action openModal(modalToOpen: string): void {
    this.modalToShow = modalToOpen;
    this.isOpen = true;
  }

  @computed truncateAddress = (addressToTruncate: string): string => {
    if (addressToTruncate) {
      const part1: string = addressToTruncate.substr(0, 6);
      const part2: string = addressToTruncate.slice(-6);
      const truncatedAddress = `${part1}......${part2}`;
      return truncatedAddress;
    } else {
      return '';
    }
  }

}