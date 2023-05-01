import React from "react";
import "./TechCards.scss";
import { Col, Row } from "react-bootstrap";
import person from "../../Assets/Images/person.jpg";

const TechCards = () => {
  return (
    <React.Fragment>
      <div className="slider-main-div container">
        <div className="slider-first-div">
          <div>
            <div>
              <div className="boxs">
                <div className="box py-4">
                  <img src={person} alt="Jessica" />

                  <h4 className="mt-4">
                    "Mi suscipit magna facilisis class placerat. Hendrerit
                    maecenas leo consectetuer neque nascetur. Litora consequat
                    hac suscipit ad quis tempus imperdiet consectetuer etiam
                    iaculis."
                  </h4>
                  <h3 className="review-title">Hattie Vance</h3>
                  <h5 className="review-desc">Store  Owner</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TechCards;
