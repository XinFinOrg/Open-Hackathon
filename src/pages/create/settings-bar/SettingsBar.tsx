import { observer } from 'mobx-react';
import React from 'react';

import ItemPreview from "../item-preview/ItemPreview";

const SettingsBar = observer((): JSX.Element => {
  return (
    <div className="card">
      <div className="col-12">
        <div>
          <div className="d-flex flex-column h-100">
            <ItemPreview></ItemPreview>
          </div>
        </div>
      </div>
    </div>
  );
});
export default SettingsBar;