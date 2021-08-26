import React from 'react';
import app from '../../app';
import Header from '../layout/header/Header';
import BuyDocs from './buy-docs/BuyDocs';
import DocsMenu from './docs-menu/DocsMenu';
import MintDocs from './mint-docs/MintDocs';
import NetworkDocs from './network-docs/NetworkDocs';
import SellDocs from './sell-docs/SellDocs';

const DocsPage = (): JSX.Element => {

  const getDocsPage = () => {
    switch (app.docs.activeDocsPage) {
      case 'Network Docs':
        return <NetworkDocs />;
      case 'Buy Docs':
        return <BuyDocs />;
      case 'Sell Docs':
        return <SellDocs />;
      case 'Mint Docs':
        return <MintDocs />;

      default:
        break;
    }
  };

  return (

    <>
      <DocsMenu></DocsMenu>
      <main className="main-content mt-1 border-radius-lg">
        <Header />
        {/* <XdcConnect
            btnClass="btn btn-warning"
            btnName="Click To Connect"
            onAddressChange={(wallet) => handleAddressChange(wallet)}
          /> */}

        <div className="container-fluid pb-4">
          <div className="main-header">
            <div className="row">
              <div className="col-xl-12 col-lg-10 col-md-12">
                <div className="header-content">
                  <h1>XinFin NFTs Documentation</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">

          <h5 className="line-trough"><span>{app.docs.activeDocsPage}</span></h5>

        </div>
        <div className="container-fluid">


          <div className="col-12 py-4">
            <div className="row">

            </div>
            <div className="col-md-12 mt-1 text-center">
              {getDocsPage()}

            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default DocsPage;