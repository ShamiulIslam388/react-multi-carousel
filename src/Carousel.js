import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Icon } from "@iconify/react";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems }
  } = rest;

  return (
    <div className="carousel-button-group">
      <button
        disabled={currentSlide === 0}
        className={currentSlide === 0 && "disable"}
        onClick={() => previous()}
      >
        <Icon icon="fa6-solid:angle-left" />
      </button>
      <button
        disabled={currentSlide + slidesToShow === totalItems}
        className={currentSlide + slidesToShow === totalItems && "disable"}
        onClick={() => next()}
      >
        <Icon icon="fa6-solid:angle-right" />
      </button>
    </div>
  );
};

export default function CarouselSlider({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1
    }
  };
  return (
    <div className="App">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        partialVisible={false}
        keyBoardControl={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        {children}
      </Carousel>
    </div>
  );
}
