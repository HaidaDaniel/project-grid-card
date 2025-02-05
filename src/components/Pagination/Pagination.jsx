import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span className={styles.page}>Page {page + 1}</span>
      <button className={styles.button} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
