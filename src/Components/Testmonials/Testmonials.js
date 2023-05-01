import React from "react";
import "./Testmonials.scss";
import person from "../../assets/images/person.jpg";
import Slider from "react-slick";

const Testmonials = () => {
  const list = [
    {
      img: person,
      dese: "I worked with ByteBuilders on a software development project, and I was extremely impressed with their professionalism and expertise. They delivered a high-quality software application that exceeded my expectations. I highly recommend ByteBuilders to anyone looking for custom software development services.",
      title: "Hattie Vance",
      review: "Store  Owner",
    },
    {
      img: person,
      dese: "I hired ByteBuilders to develop a mobile app for my business, and I couldn't be happier with the results. The app is user-friendly, visually appealing, and has all the features that I requested. The team at ByteBuilders was responsive and easy to work with, and they delivered the project on time and within budget.",
      title: "Daniel Walker",
      review: "Founder makko",
    },
    {
      img: person,
      dese: "I recently hired ByteBuilders for digital marketing services, and I am already seeing results. My website traffic has increased, and I am getting more leads than ever before. The team at ByteBuilders created a customized digital marketing strategy that is tailored to my business needs, and they are always available to answer my questions and provide support.",
      title: "Brooke Hawkins",
      review: "Business Manager",
    },
    {
      img: person,
      dese: "I have been using ByteBuilders's cloud computing services for a few months now, and I am extremely satisfied with the level of security and reliability. The team at ByteBuilders helped me migrate my data to the cloud, and they have been providing excellent maintenance and support services. I highly recommend ByteBuilders for cloud computing services.",
      title: "Hattie Vance",
      review: "Store  Owner",
    },
    {
      img: person,
      dese: "I worked with ByteBuilders on a website redesign project, and I was blown away by their creativity and attention to detail. The new website is visually stunning and easy to navigate, and it has helped me attract more customers to my business. The team at ByteBuilders was professional, responsive, and a pleasure to work with.",
      title: "Daniel Walker",
      review: "Founder makko",
    },
    {
      img: person,
      dese: "I recently hired ByteBuilders for digital marketing services, and I am already seeing results. My website traffic has increased, and I am getting more leads than ever before. The team at ByteBuilders created a customized digital marketing strategy that is tailored to my business needs, and they are always available to answer my questions and provide support.",
      title: "Brooke Hawkins",
      review: "Business Manager",
      title: "Brooke Hawkins",
      review: "Business Manager",
    },
    {
      img: person,
      dese: "I hired ByteBuilders to develop a mobile app for my business, and I couldn't be happier with the results. The app is user-friendly, visually appealing, and has all the features that I requested. The team at ByteBuilders was responsive and easy to work with, and they delivered the project on time and within budget.",
      title: "Hattie Vance",
      review: "Store  Owner",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
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
              At ByteBuilders Infotech, we are committed to providing innovative
              and cutting-edge solutions to our clients. Our team of skilled
              developers, designers, and marketers work together to create
              customized solutions that meet the unique needs of each client.
            </h5>
          </div>
        </div>

        <div className="container">
          <Slider {...settings}>
            {list.map((val) => {
              return (
                <React.Fragment>
                  <div>
                    <div className="boxs">
                      <div className="box py-4">
                        <img src={val.img} alt="Jessica" />

                        <h4 className="mt-4">{val.dese}</h4>
                        <h3 className="review-title">{val.title}</h3>
                        <h5 className="review-desc">{val.review}</h5>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testmonials;
