import React from "react";
import { Carousel } from "antd";
import './carousel.css';

const YTCarouselItem = () => (
  <Carousel autoplay autoplaySpeed={2000} effect="fade" speed={400} dotPosition="bottom">
    <div class="carousel1">First Slide
    </div>
    <div class="carousel1"> Second Slide
    </div>
    <div class="carousel1"> Third Slide
    </div>
    <div class="carousel1"> Fourth Slide
    </div>
  </Carousel>
);

export default YTCarouselItem;
