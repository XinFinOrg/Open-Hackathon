import React, { useState } from 'react';
import app from '../../../../app';
import { uploadMediaFileToIPFS } from '../../../../utils/helpers/pinata';
import { observer } from 'mobx-react';
import { Button } from 'reactstrap';


const UploadRow = observer((): JSX.Element => {
  const [fileProgress, setFileProgress] = useState(false);
  const fileInputRefMain: React.RefObject<HTMLInputElement> = React.createRef();
  const fileInputRefCover: React.RefObject<HTMLInputElement> = React.createRef();
  const forwardClickToInputElementMain = () => {
    fileInputRefMain.current?.click();
  };
  const forwardClickToInputElementCover = () => {
    fileInputRefCover.current?.click();
  };


  const onFileChange = async (e: React.BaseSyntheticEvent) => {
    const uploadedFile: File = e.target.files[0];
    const ipfsFileHash = await uploadMediaFileToIPFS(uploadedFile);
    app.mint.setFileType(uploadedFile.type);
    app.mint.setFileHash(ipfsFileHash);



    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onloadstart = () => setFileProgress(true);

    reader.onloadend = function () {
      const previewURL = reader.result;
      if (previewURL) {
        // app.mint.setPreviewURL(previewURL.toString());
        setFileProgress(false);
      }
    }.bind(this);
  };

  const onCoverFileChange = async (e: React.BaseSyntheticEvent) => {
    const uploadedFile: File = e.target.files[0];
    const ipfsFileHash = await uploadMediaFileToIPFS(uploadedFile);
    app.mint.setCoverFileType(uploadedFile.type);
    app.mint.setCoverFileHash(ipfsFileHash);

    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onloadstart = () => setFileProgress(true);

    reader.onloadend = function () {
      const coverURL = reader.result;
      if (coverURL) {
        //  app.mint.setPreviewURL(previewURL.toString());
        setFileProgress(false);
      }
    }.bind(this);
  };



  return (
    <>
      <div className="position-relative">

      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="upload-div">
            {fileProgress ? (
              <div className="loader"></div>
            ) : (
              <>
                <h2>Main file</h2>
                <h4>PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</h4>
                <Button className="btn-round" type="button" onClick={forwardClickToInputElementMain}>
                  <input type="file" ref={fileInputRefMain} style={{ display: 'none' }} onChange={onFileChange} />
                  Choose file
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="upload-div">
            {fileProgress ? (
              <div className="loader"></div>
            ) : (
              <>
                <h2>Cover file</h2>
                <h4>PNG, JPG, GIF or WEBP. Max 30mb.</h4>
                <Button className="btn-round" color="primary" type="button" onClick={forwardClickToInputElementCover}>
                  <input type="file" ref={fileInputRefCover} style={{ display: 'none' }} onChange={onCoverFileChange} />
                  Choose file
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
export default UploadRow;