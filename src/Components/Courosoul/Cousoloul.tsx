import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import firstImage from "../../Assets/Image/corosoul1.jpg";
import secondImage from "../../Assets/Image/corosoul2.jpg";
import thirdImage from "../../Assets/Image/corosoul3.jpg";

const CarouselComponent = () => {
  return (
    <Carousel data-testid="test">
      <Carousel.Item>
        <img className="d-block w-1100" src={firstImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={secondImage} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={thirdImage} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
