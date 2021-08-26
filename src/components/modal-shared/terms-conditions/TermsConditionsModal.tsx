import { observer } from 'mobx-react';
import React from 'react';
import { Modal, Button } from 'reactstrap';
import app from '../../../app';


const TermsConditionsModal = observer((): JSX.Element => {
  return (
    <Modal className="largeModal corporate" isOpen={app.vars.isOpen} toggle={() => app.vars.closeModal()}>
      <div className="modal-header justify-content-center">
        <h4 className="title title-up">XinFin NFTs Terms and Conditions</h4>
      </div>
      <div className="modal-body">
        <p className="text-center">
          This platform was created to go after the XinFin NFT Marketplace Bounty!<br></br>
          This platform is not intended to be used in production as it is still under initial development.  <br></br>
          This platform is not officially associated with XinFin, this is an open source project being built to shoot for the bounty being offered by XinFin.
        </p>
      </div>
      <div className="modal-footer align-right">
        <Button color="danger" type="button" onClick={() => app.vars.closeModal()}>
          Close
        </Button>
      </div>
    </Modal>
  );
});
export default TermsConditionsModal;