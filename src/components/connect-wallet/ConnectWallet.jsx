import React from 'react';
import app from '../../app';
import { XdcConnect, GetNativeBalance } from "xdc-connect";

const ConnectWallet = () => {

const handleAddressChange = async(walletLoaded)  => {
	if (walletLoaded.connected) {
    app.xdc3.setNewUser(walletLoaded);
    app.xdc3.setCurrentBalance(GetNativeBalance());
} else {
   app.vars.setAddress("");
}

};


return (
  <div>
        <XdcConnect
            btnClass="btn btn-warning"
            btnName="Click To Connect Wallet"
            onAddressChange={(wallet) => handleAddressChange(wallet)}
        />  
 </div>
);
};
export default ConnectWallet;