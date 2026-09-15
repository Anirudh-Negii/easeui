import { Children, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

const Carousel = ({ children, className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = Children.toArray(children);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slides.length]);

  if (slides.length === 0) {
    return null;
  }
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="flex items-center justify-center">
        {slides[currentIndex]}
      </div>

      {slides.length > 1 && (
        <button
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {slides.length > 1 && (
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index
                  ? "bg-gray-800"
                  : "bg-gray-300 cursor-pointer"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Carousel };
