import React, { useState } from "react";
import Loader from "../Loader/Loader";
import styles from "./ModalSlider.module.css";

const ModalSlider = ({ images, currentIndex, setCurrentIndex, onClose }) => {
  const [loading, setLoading] = useState(true);

  const handleNext = (e) => {
    e.stopPropagation();
    setLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.slider}>
        <button onClick={handlePrev} className={styles.button}>
          {"<"}
        </button>
        <div className={styles.imageContainer}>
          {loading && (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          )}
          <img
            src={images[currentIndex]?.large}
            alt={`Slide ${currentIndex + 1}`}
            className={`${styles.image} ${loading ? styles.hidden : ""}`}
            onLoad={handleImageLoad}
          />
        </div>
        <button onClick={handleNext} className={styles.button}>
          {">"}
        </button>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default ModalSlider;
