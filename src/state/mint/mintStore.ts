import { action, computed, makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from "uuid";
import app from '../../app';
import { uploadJSONFileToIPFS } from '../../utils/helpers/pinata';
import { mintToken } from '../../utils/helpers/xdc3';

export interface IMintStore {
  step: number;
  title: string;
  previewURL: string;
  description: string;
  fileHash: string;
  metaDataHash: string;
  fileType: string;
  isMinting: boolean;
}

export class MintStore implements IMintStore {

  id = uuidv4();
  step = 1;
  title = '';
  previewURL = '';
  coverURL = '';
  fileType = '';
  coverFileType = '';
  coverFileHash = '';
  description = '';
  fileHash = '';
  metaDataHash = '';
  isMinting = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action setStep = (newStep: number): void => {
    this.step = newStep;
  };
  @action setItemTitle = (newValue: string): void => {
    this.title = newValue;
  };
  @action setPreviewURL = (newValue: string): void => {
    this.previewURL = newValue;
  };
  @action setCoverURL = (newValue: string): void => {
    this.previewURL = newValue;
  };
  @action setIsMinting = (newValue: boolean): void => {
    this.isMinting = newValue;
  };
  @action setItemDescription = (newValue: string): void => {
    this.description = newValue;
  };
  @computed getMintingAddress = (): string => {
    return app.xdc3.address;
  };
  @action resetMintDetails = (): void => {
    this.step = 1;
    this.title = '';
    this.previewURL = '';
    this.fileType = '';
    this.description = '';
    this.fileHash = '';
    this.metaDataHash = '';
    this.isMinting = false;
  };
  @action setFileType = (newValue: string): void => {
    this.fileType = newValue;
  };
  @action setFileHash = (fileHash: string): void => {
    this.fileHash = fileHash;
    this.previewURL = app.vars.getImageUrlFromIPFSHash(fileHash);
  };
  @action setCoverFileType = (newValue: string): void => {
    this.coverFileType = newValue;
  };
  @action setCoverFileHash = (fileHash: string): void => {
    this.coverFileHash = fileHash;
    this.coverURL = app.vars.getImageUrlFromIPFSHash(fileHash);
  };
  @action setMetaDataHash = (metaDataHash: string): void => {
    this.metaDataHash = metaDataHash;
  };

  @action mintNewNFT = async (): Promise<void> => {
    const metaData: Record<string, string> = this._getNFTMetaData();
    const metaDataHash = await uploadJSONFileToIPFS(metaData);
    this.setMetaDataHash(metaDataHash);
    await this._sendTransaction();
  }

  _getNFTMetaData = (): Record<string, string> => {
    const metaData = {
      item: this.title,
      description: this.description,
      fileHash: this.fileHash,
      coverFileHash: this.coverFileHash,
    };
    return metaData;
  }

  _sendTransaction = async (): Promise<void> => {
     await mintToken(this.metaDataHash);
  }

}
