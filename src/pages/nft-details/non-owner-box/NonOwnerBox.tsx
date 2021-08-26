import { observer } from 'mobx-react';
import React from 'react';
import app from '../../../app';

const NonOwnerBox = observer((): JSX.Element => {


  const buyButton = <a href="#" className="btn btn-round w-100 mb-0" onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => openModal(e, "buy")}>Buy Item Now</a>;
  const notForSaleButton = <a href="#" className="btn btn-round w-100 mb-0">Not For Sale</a>;

  const openModal = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, modalToOpen: string) => {
    e.preventDefault();
    app.vars.openModal(modalToOpen);
  };

  const getButton = () => {
    return app.nft.details.status?.isForSale ? buyButton : notForSaleButton;
  };

  const getTitleText = () => {
    return app.nft.details.status?.isForSale ? "Buy Now" : "Not For Sale";
  };


  return (

    <div className="col-lg-6 mt-s">
      <div className="d-flex flex-column h-100">
        <h5 className="font-weight-bolder">{getTitleText()}</h5>
        <form action="post">
          <div className="mb-3">
            <input type="text" className="form-control" disabled={!app.nft.details.status?.isForSale} placeholder="Bid Amount" value={app.nft.details.status?.getPriceInNative()} />
          </div>
          <div className="text-center">
            {getButton()}
          </div>
        </form>
      </div>
    </div>
  );
});
export default NonOwnerBox;