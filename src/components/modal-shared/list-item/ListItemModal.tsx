import React from 'react';
import { observer } from 'mobx-react';
import { Modal, Button, FormGroup, Col, Input, Row } from 'reactstrap';
import app from '../../../app';


const ListItemModal = observer((): JSX.Element => {

  const handlePostForSaleClicked = () => {
    app.xdc3.postForSale();
    app.vars.closeModal();
  };

  return (
    <Modal className="smallModal darkModal" isOpen={app.vars.isOpen} toggle={() => app.vars.closeModal()}>
      <div className="modal-header justify-content-center">

        <h4 className="title title-up">Put {app.nft.details.title} on Sale</h4>
      </div>
      <div className="modal-body">
        <p>
          Enter your selling price.
          <br />
          Your NFT will be listed on the marketplace.
        </p>
        <div className="inputlines">
          <FormGroup>
            <label>Selling price</label>
            <Row>
              <Col sm="12">
                <Input
                  min="0"
                  value={app.nft.details.status?.getPriceInNative()}
                  placeholder="Enter your asking price"
                  id="qtn"
                  type="number"
                  onChange={(e) => app.nft.handlePriceChange(parseFloat(e.target.value))}
                />
              </Col>
            </Row>
          </FormGroup>
        </div>
        <div className="biddetails">
          <span className="left">You will receive</span>
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
          onClick={() => handlePostForSaleClicked()}
        >
          Put on Sale
        </Button>
      </div>
    </Modal>
  );
});
export default ListItemModal;
