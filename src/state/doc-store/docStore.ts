import { action, makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from "uuid";

export interface IDocStore {
  activeDocsPage: string;
}

export class DocStore implements IDocStore {
  id = uuidv4();
  activeDocsPage = 'Network Docs';

  constructor() {
    makeAutoObservable(this);
  }

  @action setDocsPage = (newPage: string): void => {
    this.activeDocsPage = `${newPage} Docs`;
  };




}
