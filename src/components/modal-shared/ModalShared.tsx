import React from 'react';
import { observer } from 'mobx-react';
import BuyModal from './buy-modal/BuyModal';
import ListItemModal from './list-item/ListItemModal';
import TransferModal from './transfer-modal/TransferModal';
import TermsConditionsModal from './terms-conditions/TermsConditionsModal';
import app from '../../app';
import ConfirmationModal from './confirmation/ConfirmationModal';



const ModalShared = observer((): JSX.Element => {
  switch (app.vars.modalToShow) {
    case 'buy':
      return <BuyModal />;
    case 'transfer':
      return <TransferModal />;
    case 'sell':
      return <ListItemModal />;
    case 'confirmation':
      return <ConfirmationModal />;
    case 'legal':
      return <TermsConditionsModal />;
    default:
      return <></>;
  }
});
export default ModalShared;
