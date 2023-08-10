import Button from "./Button";

const MainSliderItem = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="main-slider-item"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="main-slider-text container">
        <h3>{title}</h3>
        <h2>
          {description.first}
          <br/>
          {description.second}
          </h2>
        <div className="main-slider-buttons">
          <Button link='' text='Shop Woman' newClass='button-inverse' />
          <Button link='' text='Shop Men' />
        </div>
      </div>
    </div>
  );
};

export default MainSliderItem;
