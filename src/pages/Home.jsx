import React from "react";
import { useProjects } from "../hooks/useProjects";
import { useModal } from "../hooks/useModal";
import { usePagination } from "../hooks/usePagination";
import Grid from "../components/Grid/Grid";
import Pagination from "../components/Pagination/Pagination";
import ModalSlider from "../components/ModalSlider/ModalSlider";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import EmptyState from "../components/EmptyState/EmptyState";

const Home = () => {
  const { modalOpen, sliderImages, currentImageIndex, openModal, closeModal, setCurrentImageIndex } = useModal();
  const { page, setPage } = usePagination();
  const { projects, loading, error } = useProjects(page);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Projects</h1>

      {loading && !projects.length && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && projects.length === 0 && <EmptyState message="No projects available." />}
      {!loading && !error && projects.length > 0 && <Grid projects={projects} openModal={openModal} />}
      <Pagination page={page} setPage={setPage} />
      {modalOpen && (
        <ModalSlider
          images={sliderImages}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Home;
