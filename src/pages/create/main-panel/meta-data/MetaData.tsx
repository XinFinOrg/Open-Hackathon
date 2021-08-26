import React from 'react';
import app from '../../../../app';
import { observer } from 'mobx-react';
import { FormGroup, Input } from 'reactstrap';

const MetaData = observer((): JSX.Element => {


  return (
    <>
      <div className="mb-3">
        <FormGroup>
          <label>Title</label>
          <Input
            placeholder="Enter Item's title"
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => app.mint.setItemTitle(event.target.value)}
          />
        </FormGroup>
      </div>
      <div className="mb-3">
        <textarea name="desc" id="desc" cols={30} className="form-control" placeholder="Item Description" rows={6} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => app.mint.setItemDescription(e.target.value)}></textarea>
      </div>
    </>

  );
});
export default MetaData;