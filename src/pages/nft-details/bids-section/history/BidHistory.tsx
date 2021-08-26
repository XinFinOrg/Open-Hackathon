import React from 'reactstrap';
import avatar from '../../../../assets/img/team-2.jpg';


const BidHistory = (): JSX.Element => {
  return (

    <div className="col-lg-6">
      <div className="card mb-30">
        <div className="card-body p-3">
          <h6 className="mb-0">History</h6>
          <ul className="dropdown-menu relative dropdown-menu-end show">
            <li className="mb-2">
              <div className="dropdown-item border-radius-md">
                <div className="d-flex py-1">
                  <div className="my-auto">
                    <img src={avatar} alt="img" className="avatar avatar-sm  me-3 " />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="text-sm font-weight-normal mb-1">
                      <span className="font-weight-bold">Price Set</span> to <span className="gradient-text">0.00 XDC(SAMPLE DATA)</span>
                    </h6>
                    <p className="text-xs text-secondary mb-0">
                      <i className="fa fa-clock me-1" aria-hidden="true"></i>
                      15 minutes ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown-item border-radius-md">
                <div className="d-flex py-1">
                  <div className="my-auto">
                    <img src={avatar} alt="" className="avatar avatar-sm bg-gradient-dark  me-3 " />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="text-sm font-weight-normal mb-1">
                      <span className="font-weight-bold">Listed By</span> Travis Scott(SAMPLE DATA)
                    </h6>
                    <p className="text-xs text-secondary mb-0">
                      <i className="fa fa-clock me-1" aria-hidden="true"></i>
                      47 minutes ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BidHistory;