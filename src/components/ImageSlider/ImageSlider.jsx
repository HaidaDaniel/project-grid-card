import React, { useState } from "react";
import Loader from "../Loader/Loader";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ images, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoading(true);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setLoading(true);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={styles.slider} onClick={onClick}>
      <button onClick={handlePrev} className={styles.button}>
        {"<"}
      </button>
      {loading && (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}
      <img
        src={images[currentIndex]?.small}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
        onLoad={handleImageLoad}
      />
      <button onClick={handleNext} className={styles.button}>
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
