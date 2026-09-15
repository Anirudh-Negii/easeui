import { Children, useState } from "react";

export interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

const Carousel = ({ children, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = Children.toArray(children);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`relative ${className ?? ""}`}>
      <button onClick={previousSlide}>Previous</button>

      {slides[currentIndex]}

      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export { Carousel };
