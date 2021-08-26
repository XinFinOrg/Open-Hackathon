import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Modal, Button, FormGroup, Col, Input, Row } from 'reactstrap';
import app from '../../../app';
import { sendTransferTransaction } from '../../../utils/helpers/xdc3';


const TransferModal = observer((): JSX.Element => {
  const [addressToBeTransferred, setAddressToBeTransferred] = useState('');

  const handleTransferClicked = () => {
    sendTransferTransaction(addressToBeTransferred);
    app.vars.closeModal();
  };

  return (
    <Modal className="smallModal darkModal" isOpen={app.vars.isOpen} toggle={() => app.vars.closeModal()}>
      <div className="modal-header justify-content-center">
        <h4 className="title title-up">Transfer {app.nft.details.title}</h4>
      </div>
      <div className="modal-body">
        <p>You can transfer token from your address to another</p>
        <div className="inputlines">
          <FormGroup>
            <label>Receiver address</label>
            <Row>
              <Col sm="12">
                <Input
                  placeholder="Transfer address"
                  id="receive"
                  type="text"
                  onChange={e => {
                    setAddressToBeTransferred(e.target.value);
                  }}
                />
              </Col>
            </Row>
          </FormGroup>
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
            handleTransferClicked();
          }}
        >
          Transfer
        </Button>
      </div>
    </Modal>
  );
});
export default TransferModal;
