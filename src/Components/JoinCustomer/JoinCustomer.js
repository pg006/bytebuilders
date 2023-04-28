import React from "react";
import "./JoinCustomer.scss";
import image_1 from "../../Assets/Images/image_1.png";
import image_2 from "../../Assets/Images/image_2.png";
import image_3 from "../../Assets/Images/image_3.png";
import image_4 from "../../Assets/Images/image_4.png";
import image_5 from "../../Assets/Images/image_5.png";
import image_6 from "../../Assets/Images/image_6.png";
import image_7 from "../../Assets/Images/image_7.png";
import image_8 from "../../Assets/Images/image_8.png";
import image_9 from "../../Assets/Images/image_9.png";
import image_10 from "../../Assets/Images/image_10.png";

const JoinCustomer = () => {
  return (
    <React.Fragment>
      <div className="join-customer-main-div py-4">
        <h3 className="d-flex justify-content-center py-3">
          Join our 30,000+ happy customers
        </h3>
        <div className="image-div mb-4">
          <img src={image_1} alt="image1" className="image my-4 mx-3" />
          <img src={image_2} alt="image2" className="image my-4 mx-3" />
          <img src={image_3} alt="image3" className="image my-4 mx-3" />
          <img src={image_4} alt="image4" className="image my-4 mx-3" />
          <img src={image_5} alt="image5" className="image my-4 mx-3" />
          <img src={image_6} alt="image6" className="image my-4 mx-3" />
          <img src={image_7} alt="image7" className="image my-4 mx-3" />
          <img src={image_8} alt="image8" className="image my-4 mx-3" />
          <img src={image_9} alt="image9" className="image my-4 mx-3" />
          <img src={image_10} alt="image10" className="image my-4 mx-3" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default JoinCustomer;
