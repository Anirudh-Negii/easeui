import { Carousel } from "@/components/Carousel/Carousel";

const CarouselPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Carousel</h1>

      <Carousel>
        <div className="p-20 bg-gray-200 text-center text-gray-900">
          Slide 1
        </div>
        <div className="p-20 bg-gray-300 text-center text-gray-900">
          Slide 2
        </div>
        <div className="p-20 bg-gray-400 text-center text-gray-900">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
