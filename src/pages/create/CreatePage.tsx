import React, { useEffect } from "react";
import { Sidebar } from "../../components";
import app from "../../app";

//icons
import Header from "../layout/header/Header";
import SettingsBar from "./settings-bar/SettingsBar";
import MainPanel from "./main-panel/MainPanel";

export const CreatePage = (): JSX.Element => {


  const handleMintClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    app.mint.mintNewNFT();
    app.vars.openModal('confirmation');
  };


  useEffect(() => {
    app.mint.resetMintDetails();
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main-content mt-1 border-radius-lg">
        <Header />


        <div className="container-fluid pb-4">
          <div className="main-header">
            <div className="row">
              <div className="col-xl-12 col-lg-10 col-md-12">
                <div className="header-content">
                  <h1>Mint your NFT</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-heading d-flex">

              </div>
              <MainPanel></MainPanel>
            </div>
            <div className="col-lg-4">
              <SettingsBar></SettingsBar>

              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <div className="text-center">
                    <button className="btn btn-mint btn-round w-100 my-5 mb-4" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleMintClicked(e)}>Mint Item Now</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



      </main>
    </>
  );
};

export default CreatePage;
