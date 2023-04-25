import React from "react";
import "./Testmonials.scss";
import person from "../../Assets/Images/person.jpg";
import Slider from 'react-slick'

const Testmonials = () => {
  const list = [
    { img: person, title: "Hattie Vance", review: "Store  Owner" },
    { img: person, title: "Daniel Walker", review: "Founder makko" },
    { img: person, title: "Brooke Hawkins", review: "Business Manager" },
    { img: person, title: "Hattie Vance", review: "Store  Owner" },
    { img: person, title: "Daniel Walker", review: "Founder makko" },
    { img: person, title: "Brooke Hawkins", review: "Business Manager" },
    { img: person, title: "Hattie Vance", review: "Store  Owner" },
    { img: person, title: "Daniel Walker", review: "Founder makko" },
    { img: person, title: "Brooke Hawkins", review: "Business Manager" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="testmonials-main-div">
        <div className="p-0 m-0">
          <h3>TESTIMONIAL</h3>
          <div className="d-flex justify-content-center mt-2">
            <h1>What they say about us</h1>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="title-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </h5>
          </div>
        </div>

        <div className="container">
          <Slider {...settings}>
            {list.map((val) => {
              return (
                <>
                  <div>
                    <div className="boxs">
                      <div className="box py-4">
                        <img src={val.img} alt="Jessica" />

                        <h4 className="mt-4">
                          "Mi suscipit magna facilisis class placerat. Hendrerit
                          maecenas leo consectetuer neque nascetur. Litora
                          consequat hac suscipit ad quis tempus imperdiet
                          consectetuer etiam iaculis."
                        </h4>
                        <h3 className="review-title">{val.title}</h3>
                        <h5 className="review-desc">{val.review}</h5>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testmonials;
