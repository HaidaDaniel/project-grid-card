import { useState, useEffect } from "react";

export function useModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (images, index) => {
    setSliderImages(images);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSliderImages([]);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [modalOpen]);

  return { modalOpen, sliderImages, currentImageIndex, openModal, closeModal, setCurrentImageIndex };
}
