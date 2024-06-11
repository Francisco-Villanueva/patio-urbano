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
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    if (!transitioning) {
      setTransitioning(true);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    if (!transitioning) {
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
    "transition-all duration-150 p-2  bg-blur-black hover:bg-black rounded-md";
  return (
    <div className="slider flex flex-col justify-center max-md:justify-start w-full    ">
      <div
        className="slide-wrapper flex z-0  w-full absolute"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <div className="slide   justify-center  flex items-center " key={i}>
            <img
              src={image}
              alt={`Slide ${currentIndex}`}
              className="rounded-3xl w-full h-full  aspect-auto"
            />
          </div>
        ))}
      </div>
      <div className="flex   w-full justify-between items-center h-full  z-50">
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
