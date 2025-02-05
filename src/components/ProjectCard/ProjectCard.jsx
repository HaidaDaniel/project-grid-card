import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, openModal }) => {
  const { images, generalInfo } = project;

  return (
    <div className={styles.card}>
      <div
        className={styles.imageWrapper}
        onClick={() => openModal(images, 0)}
      >
        <ImageSlider images={images} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{generalInfo.name}</h3>
        <p className={styles.type}>{generalInfo.type}</p>
        <p className={styles.price}>${generalInfo.price.toLocaleString()}</p>
        <div className={styles.additionalInfo}>
          <p>{generalInfo.rooms} Rooms</p>
          <p>{generalInfo.bathrooms} Bathrooms</p>
          <p>{generalInfo.size} sqm</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
