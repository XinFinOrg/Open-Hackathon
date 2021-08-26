import React from 'react';
import { observer } from 'mobx-react';
import app from '../../../app';

const DetailsPanel = observer((): JSX.Element => {
  const isOwner = app.nft.details.status?.userIsOwner;

  const openModal = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, modalToOpen: string) => {
    e.preventDefault();
    app.vars.openModal(modalToOpen);
  };

  const notForSaleButton: JSX.Element = <div className="col-lg-6"><a href="#" className="btn btn-outline-primary btn-sm mb-0">Not <span className="gradient-text">for sale</span></a> </div>;
  const transferButton: JSX.Element = <div className="col-lg-6"><a href="#" className="btn btn-outline-primary btn-sm mb-0" onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => openModal(e, "transfer")}><span className="gradient-text">Transfer</span></a> </div>;

  const getForSaleButton = (): JSX.Element => {
    return isOwner ? <></> : notForSaleButton;
  };
  const getTransferButton = (): JSX.Element => {
    return app.nft.details.status?.userIsOwner && !app.nft.details.status.isForSale ? transferButton : <></>;
  };

  return (
    <div className="col-12 mb-30 mt-s">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex flex-column h-100">
                {/*        <p className="mb-1">3 of 5 In Stock</p> */}
                <h4 className="font-weight-bolder">{app.nft.details.title}</h4>
                <p>{app.nft.details.description}</p>

                <div className="row">
                  {getForSaleButton()}
                  {getTransferButton()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
});
export default DetailsPanel;

