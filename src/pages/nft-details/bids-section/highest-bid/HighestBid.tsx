import React from 'reactstrap';
import avatar from '../../../../assets/img/kal-visuals-square.jpg';

const HighestBid = (): JSX.Element => {
  return (
    <div className="col-lg-6 mt-lg-0">
      <div className="card card-background shadow-none card-background-mask-primary">
        <div className="full-background jerry-added-bg-style"></div>
        <div className="card-body text-center p-3 w-100">
  
          <h5 className="text-white up mb-10p">Last Sale - Sample Data</h5>
          <ul className="list-group mt-15p">
            <li className="list-group-item border-0 d-flex align-items-center px-2">
              <a href="profile.html" className="avatar v2 mr-10">
                <img src={avatar} alt="kal" width="40" className="" />
              </a>
              <div className="d-flex align-items-start flex-column justify-content-center">
                <a href="profile.html"><h6 className="author-name">User</h6></a>
              </div>
              <div className="d-flex align-items-start ms-auto flex-column justify-content-center">
                <h6 className="author-name gradient-text mb-0"> XDC</h6>
                <p className="mb-0 text-dark"> 😉</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HighestBid;