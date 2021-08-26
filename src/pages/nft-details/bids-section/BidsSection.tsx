import React from 'react';
import app from '../../../app';
import NonOwnerBox from '../non-owner-box/NonOwnerBox';
import OwnerBox from '../owner-box/OwnerBox';
import HighestBid from './highest-bid/HighestBid';
import BidHistory from './history/BidHistory';

const BidsSection = (): JSX.Element => {
  return (
    <>
      <div className="col-12 mb-30">
        <div className="card">
          <div className="card-body p-3">
            <div className="row align-items-center">
              <HighestBid></HighestBid>
              {app.nft.details.status?.userIsOwner ? <OwnerBox /> : <NonOwnerBox />}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <BidHistory></BidHistory>
      </div>
    </>
  );
};
export default BidsSection;