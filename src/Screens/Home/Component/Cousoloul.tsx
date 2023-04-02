import React from "react";
import Carousel  from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import ele1 from "../../../Assets/Image/ele1.png";
import element2 from '../../../Assets/Image/ele2.png'
import element3 from "../../../Assets/Image/ele3.png";
import element4 from "../../../Assets/Image/ele4.png";
import element5 from "../../../Assets/Image/ele5.png";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={ele1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={element2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={element3} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={element4} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={element5} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
