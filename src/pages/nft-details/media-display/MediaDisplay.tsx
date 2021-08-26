import React from 'react';
import app from '../../../app';

const MediaDisplay = (): JSX.Element => {

  return (
    <div className="card">
      <div className="card-body p-3">
        <img src={app.vars.getImageUrlFromIPFSHash(app.nft.details.fileHash)} className="w-100 border-radius-lg" alt="" />
      </div>
    </div>
  );
};
export default MediaDisplay;