import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  color: "#fff",
  lineHeight: "360px",
  textAlign: "center",
  background: "#364d79",
};

const YTCarouselItem = () => (
  <Carousel autoplay dotPosition="top">
    <div>
      <h3 style={contentStyle}>First Slide</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Second Slide</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Third Slide</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Fourth Slide</h3>
    </div>
  </Carousel>
);

export default YTCarouselItem;
