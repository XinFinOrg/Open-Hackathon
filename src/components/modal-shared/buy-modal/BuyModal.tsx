import React from 'react';
import { observer } from 'mobx-react';
import { Modal, Button, FormGroup, Col, Input, Row } from 'reactstrap';
import app from '../../../app';


const BuyModal = observer((): JSX.Element => {
  return (
    <Modal className="smallModal darkModal" isOpen={app.vars.isOpen} toggle={() => app.vars.closeModal()}>
      <div className="modal-header justify-content-center">

        <h4 className="title title-up">Checkout</h4>
      </div>
      <div className="modal-body">
        <p>
          You are about to purchase <strong>{app.nft.details.title}</strong>
        </p>

        <div className="inputlines">
          <FormGroup>
            <label>Price</label>
            <Row>
              <Col sm="10">
                <Input
                  min="0"
                  placeholder="Price"
                  id="price"
                  type="number"
                  value={app.nft.details.status?.getPriceInNative()}
                  disabled
                />
              </Col>
              <Col sm="2">
                <h3 className="asset gradient-text">XDC</h3>
              </Col>
            </Row>
          </FormGroup>
        </div>
        <div className="biddetails">
          <span className="left">Your balance (wallet)</span>
          <span className="right">  {Number(app.xdc3.balance).toFixed(3)} XDC</span>
        </div>

        <div className="biddetails">
          <span className="left">You will pay</span>
          <span className="right">{app.nft.details.status?.getPriceInNative()} XDC</span>
        </div>
      </div>
      <div className="modal-footer">
        <Button color="danger" type="button" onClick={() => app.vars.closeModal()}>
          Cancel
        </Button>
        <Button
          color="default"
          className="btn-round"
          type="button"
          onClick={() => {
            app.xdc3.buyFixedPriceNFT();
          }}
        >
          Proceed to Payment
        </Button>
      </div>
    </Modal>
  );
});
export default BuyModal;
