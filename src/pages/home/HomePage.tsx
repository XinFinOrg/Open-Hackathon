import React, { Fragment } from 'react';
import app from '../../app';
import { Sidebar } from "../../components";
import { observer } from 'mobx-react';
import { DisplayCard } from "./display-card/DisplayCard";
import Header from '../layout/header/Header';

//* Home Page
export const HomePage = observer(() => {

  const getTitleText = () => {
    return app.nft.allNFTs.length > 0 ? "New Listed Items" : "No Results Found";
  };
  const getButtonText = () => {
    return app.nft.allNFTs.length > 0 ? <a href="#" className="btn btn-round mb-0" onClick={() => app.nft.loadMoreTokens()}>Load More</a> : <></>;
  };

  React.useEffect(() => {
    if (app.nft.allNFTs.length === 0) {
      app.nft.loadAllNFTs();
    }
  }, []);

  return (
    <>
      <Sidebar></Sidebar>
      <main className="main-content mt-1 border-radius-lg">
        <Header />
        <div className="container-fluid pb-4">
          <div className="main-header">
            <div className="row">
              <div className="col-xl-12 col-lg-10 col-md-12">
                <div className="header-content">
                  <h1>Mint, Buy and Sell NFTs on XinFin</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">

          <h5 className="line-trough"><span>{getTitleText()}</span></h5>

        </div>
        <div className="container-fluid">


          <div className="col-12 py-4">
            <div className="row">
              {app.nft.allNFTs.map((nft, i) => {
                return (
                  <Fragment key={i}>
                    <DisplayCard nft={nft}></DisplayCard>
                  </Fragment>
                );
              })}
            </div>
            <div className="col-md-12 mt-1 text-center">
              {getButtonText()}
            </div>
          </div>
        </div>
      </main>
    </>

  );

});

export default HomePage;