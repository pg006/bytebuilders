import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Password from "../../../Data/Authenticatepage/DataAuthentication";
import U9 from '../../../assets/images/UserImages/U9.jpg' 

const LockScreen = () => {
  return (
    <React.Fragment>
      <div>
        {/* <!-- CONTAINER OPEN --> */}
        <div className="container-login100">
          <div className="wrap-login100 p-6">
            <Form className="login100-form validate-form">
              <div className="text-center mb-4">
                <img
                  src={U9}
                  alt="lockscreen pic"
                  className="avatar avatar-xxl brround mb-2"
                />
                <h4>Olivia Smith</h4>
              </div>

              <Password />

              <div className="container-login100-form-btn pt-0">
                <Link
                  to={`${process.env.PUBLIC_URL}/dashboard`}
                  className="login100-form-btn btn-primary"
                >
                  Unlock
                </Link>
              </div>
              <div className="text-center pt-2">
                <span className="txt1 me-3">I Forgot Password</span>
                <Link
                  className=""
                  to={`${process.env.PUBLIC_URL}/authentication/forgotpassword`}
                >
                  Give me a Hint
                </Link>
              </div>
              <label className="login-social-icon">
                <span>OR</span>
              </label>
              <div className="d-flex justify-content-center">
                <Link to="#">
                  <div className="social-login me-4 text-center">
                    <i className="fa fa-google"></i>
                  </div>
                </Link>
                <Link to="#">
                  <div className="social-login me-4 text-center">
                    <i className="fa fa-facebook"></i>
                  </div>
                </Link>
                <Link to="#">
                  <div className="social-login text-center">
                    <i className="fa fa-twitter"></i>
                  </div>
                </Link>
              </div>
            </Form>
          </div>
        </div>
        {/* <!-- CONTAINER CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default LockScreen;
