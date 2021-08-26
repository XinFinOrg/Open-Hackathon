

import { ConstantsStore } from "../state/constants/constantsStore";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { MintStore } from "../state/mint/mintStore";
import { XDC3Store } from "../state/xdc3/xdc3Store";
import { NFTStore } from "../state/nfts/nftStore";
import { DocStore } from "../state/doc-store/docStore";

class AppState {
  id = uuidv4();
  vars: ConstantsStore;
  xdc3: XDC3Store;
  mint: MintStore;
  nft: NFTStore;
  docs: DocStore;

  constructor() {
    makeAutoObservable(this);
    this.mint = new MintStore();
    this.nft = new NFTStore();
    this.vars = new ConstantsStore();
    this.xdc3 = new XDC3Store();
    this.docs = new DocStore();
  }
}

const app = new AppState();
export default app;
