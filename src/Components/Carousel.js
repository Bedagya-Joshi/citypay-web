import React from "react";
import { Carousel } from "antd";
import "./carousel.css";
// image import
import photo1 from "../Assets/Carousel-img4.jpg";
import photo2 from "../Assets/downloadcitypay.png";
import photo3 from "../Assets/Carousel-img2.jpg";
import photo4 from "../Assets/Carousel-img3.png";

const contentStyle = {
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselItem = () => (
  <Carousel autoplay autoplaySpeed={1500} effect="fade" speed={500} dotPosition="bottom">
    <div class="carousel">
      <img src={photo3} alt="carousel" class="carouselimage"/>
    </div>
    <div class="carousel">
      <img src={photo2} alt="carousel" class="carouselimage"/>
    </div>
    <div class="carousel">
      <img src={photo1} alt="carousel" class="carouselimage"/>
    </div>
    <div class="carousel">
      <img src={photo4} alt="carousel" class="carouselimage"/>
    </div>
  </Carousel>
);

export default CarouselItem;
