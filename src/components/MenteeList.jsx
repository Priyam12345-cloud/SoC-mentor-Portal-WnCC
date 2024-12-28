import React, { useState } from "react";
import "./MenteeList.css";
import { motion } from "framer-motion";

const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

// Slide Component
const Slide = ({ slide, isActive, handleClick }) => {
  const { src, button, headline, index } = slide;

  return (
    <li
      className={`slide ${isActive ? "slide--active" : ""}`}
      onClick={() => handleClick(index)}
    >
      <div className="slide__image-wrapper">
        <img className="slide__image" src={src} alt={headline} />
      </div>
      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btnn">{button}</button>
      </article>
    </li>
  );
};

// Slider Control Component
const SliderControl = ({ type, handleClick }) => (
  <button className={`btnn btnn--${type}`} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

// Main Slider Component
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slider">
      <ul
        className="slider__wrapper"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.index}
            slide={slide}
            isActive={
              index === current || index === (current + 1) % slides.length
            }
            handleClick={handleSlideClick}
          />
        ))}
      </ul>
      <SliderControl type="previous" handleClick={handlePreviousClick} />
      <SliderControl type="next" handleClick={handleNextClick} />
    </div>
  );
};

// Main MenteeList Component
function MenteeList() {
  return (
    <div className="title_wrapper">
      <motion.span
        className="service_title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        Mentee List
      </motion.span>
      <motion.h2
        className="service_titlebelow"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Save Time Managing Mentee List
        <br />
        For Your Course.
      </motion.h2>

      <div className="mentee-list-container">
        <Slider slides={slideData} />
        <a
          id="yt-link"
          className="meta-link"
          href="https://www.youtube.com/@codewith_muhilan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
          <span>Choose Your Mentees wisely❤</span>
        </a>
        <a
          id="source-link"
          className="meta-link"
          href="https://t.me/+7yc_oGHnLJhlOWVl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-link"></i>
          <span>Go To RankList</span>
        </a>
      </div>
    </div>
  );
}

export default MenteeList;
