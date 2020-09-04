const Xdc3 = require("xdc3");

const { abi } = require("./abi/FirstContract");

const xdc3 = new Xdc3(
  new Xdc3.providers.HttpProvider("https://rpc.apothem.network")
);

const contractAddr = "xdcfc95a81992c78db2377321f7bb56d2581a4155a6";

const contractInst = new xdc3.eth.Contract(abi, contractAddr);

contractInst.methods
  .getA()
  .call()
  .then((resp) => {
    console.log("response:A:", resp);
  })
  .catch((e) => {
    console.log(e);
  });

contractInst.methods
  .getB()
  .call()
  .then((resp) => {
    console.log("response:B:", resp);
  })
  .catch((e) => {
    console.log(e);
  });
