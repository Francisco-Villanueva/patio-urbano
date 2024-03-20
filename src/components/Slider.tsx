import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";
import "../styles/Slider.css";
interface SliderProps {
  images: string[]; // Array de URLs de imágenes para el slider
}

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const prevSlide = () => {
    if (!transitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(true);
    }
  };

  const nextSlide = () => {
    if (!transitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(true);
    }
  };
  useEffect(() => {
    const transitionEndListener = () => {
      setTransitioning(false);
    };

    document
      .querySelector(".slide-wrapper")
      ?.addEventListener("transitionend", transitionEndListener);

    return () => {
      document
        .querySelector(".slide-wrapper")
        ?.removeEventListener("transitionend", transitionEndListener);
    };
  }, []);

  const buttonStyle =
    "transition-all duration-150 py-2 px-6 hover:bg-blur-black rounded-md";
  return (
    <div className="slider relative grid place-items-center w-full  ">
      <div
        className="slide-wrapper flex absolute w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <div className="slide grid place-items-center" key={i}>
            <img
              src={image}
              alt={`Slide ${currentIndex}`}
              className="rounded-3xl "
            />
          </div>
        ))}
      </div>
      <div className="flex  absolute w-full justify-between bg-tran">
        <button onClick={prevSlide} className={buttonStyle}>
          <ArrowLeft />
        </button>
        <button onClick={nextSlide} className={buttonStyle}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
