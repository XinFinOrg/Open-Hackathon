import React from 'react';
import Header from './../layout/header/Header';

import { Sidebar } from '../../components';
import DetailsPanel from './details-panel/DetailsPanel';

import { observer } from 'mobx-react';
import DetailsHeader from './header/DetailsHeader';
import MediaDisplay from './media-display/MediaDisplay';
import BidsSection from './bids-section/BidsSection';

//* NFT Details Page Per Design Docs
export const NFTDetailsPage = observer((): JSX.Element => {


  return (
    <>
      <Sidebar />
      <main className="main-content mt-1 border-radius-lg">
        <Header />
        <DetailsHeader />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 me-auto mt-lg-0">
              <MediaDisplay />
            </div>
            <div className="col-lg-7">
              <DetailsPanel />
              <BidsSection />
            </div>
          </div>
        </div>

      </main>
    </>
  );
});
export default NFTDetailsPage;
