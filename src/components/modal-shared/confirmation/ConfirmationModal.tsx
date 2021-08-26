import React from 'react';
import { Modal, Button } from 'reactstrap';
import app from '../../../app';


const ConfirmationModal = (): JSX.Element => {
  return (

    <Modal className="smallModal darkModal" isOpen={app.vars.isOpen} toggle={() => app.vars.closeModal()}>
      <div className="modal-header justify-content-center">
        <h4 className="title title-up">Mint Confirmation</h4>
      </div>
      <div className="modal-body">
        <p>Your transaction has been submitted to the network. It will appear in the dashboard after confirmation. A refresh of the browser may be needed.</p>
        <div className="inputlines">

        </div>
      </div>
      <div className="modal-footer">
        <Button
          href="/"
          color="default"
          className="btn-round"
          type="button"
          onClick={() => {
            app.vars.closeModal();
          }}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};
export default ConfirmationModal;