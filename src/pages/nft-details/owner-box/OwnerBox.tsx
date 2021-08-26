import { observer } from 'mobx-react';
import React from 'react';
import { FormGroup, Row, Col, Input } from 'reactstrap';
import app from '../../../app';
import { approveOperatorForToken, removeFromSale } from '../../../utils/helpers/xdc3';

const OwnerBox = observer((): JSX.Element => {

  const isDisabled = (): boolean => {
    const isForSale = app.nft.details.status?.isForSale;
    const isNotApproved = !app.nft.details.status?.approved;
    return isForSale || isNotApproved;
  };

  const getTitleText = () => {
    return app.nft.details.status?.isForSale ? "Remove From Sale" : getNonForSaleTitleText();
  };

  const getNonForSaleTitleText = () => {
    return !app.nft.details.status?.approved ? "Approve For Sale" : "Put On Sale";
  };

  const handleApproveClicked = () => {
    approveOperatorForToken(app.vars.marketplaceContractAddress, app.nft.details.tokenId);
  };

  const handleRemoveClicked = () => {
    removeFromSale();
  };

  const removeFromSaleButton = <a href="#" className="btn btn-round w-100 mb-0" onClick={() => handleRemoveClicked()}>Remove From Sale</a>;
  const listForSaleButton = <a href="#" className="btn btn-round w-100 mb-0" onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => openModal(e, "sell")}>List For Sale</a>;
  const ApproveButton = <a href="#" className="btn btn-round w-100 mb-0" onClick={() => handleApproveClicked()}>Approve For Sale</a>;


  const getButton = () => {

    return app.nft.details.status?.isForSale ? removeFromSaleButton : getNotForSaleButton();
  };

  const getNotForSaleButton = () => {
    return app.nft.details.status?.approved ? listForSaleButton : ApproveButton;
  };



  const openModal = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, modalToOpen: string) => {
    e.preventDefault();
    app.vars.openModal(modalToOpen);
  };
  return (

    <div className="col-lg-6 mt-s">
      <div className="d-flex flex-column h-100">
        <h5 className="font-weight-bolder">{getTitleText()}</h5>
        <form action="post">
          <div className="mb-3">
            <FormGroup>
              <Row>
                <Col sm="12">
                  <Input
                    min="0"
                    disabled={isDisabled()}
                    placeholder="Enter your asking price in XDC"
                    value={app.nft.details.status?.getPriceInNative()}
                    id="qtn"
                    type="number"
                    onChange={(e) => app.nft.handlePriceChange(parseFloat(e.target.value))}
                  />
                </Col>
              </Row>
            </FormGroup>
          </div>

          <div className="text-center">
            {getButton()}
          </div>
        </form>
      </div>
    </div>
  );
});
export default OwnerBox;