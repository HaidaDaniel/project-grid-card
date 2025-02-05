import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Grid.module.css";

const Grid = ({ projects, openModal }) => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default Grid;
