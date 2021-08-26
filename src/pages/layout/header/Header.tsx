/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import app from "../../../app";
import { observer } from "mobx-react";
import XDCIcon22 from "../../../assets/img/xdc-icon-22.png";
import ConnectWallet from '../../../components/connect-wallet/ConnectWallet';

const Header = observer((): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsCopied(true);
    const walletAddress = `${app.xdc3.address}`;
    const inputElement = document.createElement("input") as HTMLInputElement;
    inputElement.setAttribute("value", walletAddress);
    document.body.appendChild(inputElement);
    inputElement?.select();
    document.execCommand("copy");
    inputElement.parentNode?.removeChild(inputElement);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleCopyButtonClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onCopyText(e);
  };

  const connectButton = <ConnectWallet></ConnectWallet>;
  const addressDisplay = <li className="nav-item d-flex align-items-center">
    <a className="nav-link text-body font-weight-bold px-0">
      <div id="address" onClick={(e) => handleCopyButtonClicked(e)}>
        <span className="wallet-addres">
          <i className="tim-icons icon-wallet-43" />
          {app.xdc3?.address}
        </span>
        <div className="btn btn-primary copybtn">
          <img src={XDCIcon22} className="xdc-icon" alt="..." />
        </div>
        {isCopied && (
          <span
            className={`copy-feedback ${isCopied ? " active" : ""}`}
          >
            Copied!
          </span>
        )}
      </div>
    </a>
  </li>;

  const getButton = (): JSX.Element => {
    return app.xdc3.isConnected() ? addressDisplay : connectButton;
  };

  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" >
      <div className="container-fluid py-0 px-1">
        <nav aria-label="breadcrumb">
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">

          </div>
          <ul className="navbar-nav  justify-content-end">
            {getButton()}

          </ul>
        </div>
      </div>
    </nav>
  );
});
export default Header;