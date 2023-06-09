import React, { useState } from 'react';
import './Slider.css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1
      );
    } else {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div className="slider">
      <div className="arrow arrow-left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {sliderItems.map((item) => (
          <div key={item.id} className="slide">
            <div className="img-container">
              <img src={item.img} alt="" className="image" />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.description}</p>
              <button className="btn">Shop now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow arrow-right" onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
