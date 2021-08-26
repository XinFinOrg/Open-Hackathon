import React from 'react';
import app from '../../../app';
import { observer } from 'mobx-react';



const ItemPreview = observer((): JSX.Element => {

  const div1 = <span className="empty-box"></span>;
  const div2 = <span className="preview-box"><h2>Preview</h2>;
    <h4>Upload file to preview your brand new NFT</h4></span>;

  const img1 = <img
    src={app.mint.previewURL}
    id="nftPreview"
    alt={app.mint.title}
  ></img>;

  const cl1 = <div className="dbFHnU2">{img1} {div1}</div>;
  const cl2 = <div className="dbFHnU">{img1} {div2}</div>;


  const chooseDiv = (): JSX.Element => {
    return app.mint.previewURL.length > 0 ? cl1 : cl2;
  };

  return (
    <>

    {chooseDiv()}
     
    </>
  );
});
export default ItemPreview;