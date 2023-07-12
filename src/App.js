import CarouselSlider from "./Carousel";
import ImageUrl from "./ImageUrl";

const ImageComp = ({ imageUrl }) => {
  return (
    <div className="slider">
      <img src={imageUrl.url} alt="movie" />
    </div>
  );
};
const App = () => {
  return (
    <CarouselSlider>
      {ImageUrl.map((imageurl, index) => (
        <ImageComp key={index} imageUrl={imageurl} />
      ))}
    </CarouselSlider>
  );
};

export default App;
