import React from 'react';
import app from '../../../../app';

const ForSaleBox = (): JSX.Element => {
  return (
    <div className="col-lg-6 mt-s">
      <div className="d-flex flex-column h-100">
        <h5 className="font-weight-bolder">Item is For Sale</h5>
        <form action="post">

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Bid Amount" />
          </div>

          <div className="text-center">
            <a href="bid" className="btn btn-round w-100 mb-0">Remove Item From Sale</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForSaleBox;