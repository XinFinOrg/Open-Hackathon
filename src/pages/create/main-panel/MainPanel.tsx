import { observer } from 'mobx-react';
import React from 'react';
import MetaData from "./meta-data/MetaData";
import UploadRow from "./upload-row/UploadRow";

const MainPanel = observer((): JSX.Element => {
  return (

    <div className="col-12 mb-30">
      <div className="card z-index-0">
        <div className="card-body">
          <UploadRow></UploadRow>
          <form action="post">
            <MetaData></MetaData>
          </form>
        </div>
      </div>
    </div>
  );
});
export default MainPanel;