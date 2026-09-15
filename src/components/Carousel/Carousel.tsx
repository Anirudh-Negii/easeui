import { Children, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

export interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel = ({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
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

  const startAutoPlay = () => {
    if (!autoPlay || slides.length <= 1) return;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  };

  const nextSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    setCurrentIndex((prev) => (prev + 1) % slides.length);

    startAutoPlay();
  };

  const previousSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    startAutoPlay();
  };

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, slides.length]);

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        className,
      )}
      tabIndex={0}
      aria-label="Carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          previousSlide();
        }

        if (event.key === "ArrowRight") {
          nextSlide();
        }
      }}
    >
      <div
        key={currentIndex}
        className="flex items-center justify-center animate-in fade-in duration-300"
      >
        {slides[currentIndex]}
      </div>

      {slides.length > 1 && (
        <button
          onClick={previousSlide}
          aria-label={`Go to slide ${
            currentIndex === 0 ? slides.length : currentIndex
          }`}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {slides.length > 1 && (
        <button
          onClick={nextSlide}
          aria-label={`Go to slide ${
            currentIndex === slides.length - 1 ? 1 : currentIndex + 2
          }`}
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
              onClick={() => {
                if (autoPlayRef.current) {
                  clearInterval(autoPlayRef.current);
                }

                setCurrentIndex(index);
                startAutoPlay();
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                currentIndex === index ? "bg-gray-800" : "bg-gray-300",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Carousel };
