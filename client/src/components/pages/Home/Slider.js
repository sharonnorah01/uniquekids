import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import banner from "../../../assets/images/banner/banner.jpg";
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from "../../../assets/images/banner/banner2.jpg"
const items = [
  {
    src: banner,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Baby Power",
    key: "1",
  },
  {
    src:
    banner1,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Girl Power",
    key: "2",
  },
  {
    src: banner2,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Boy Power",
    key: "3",
  },
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
