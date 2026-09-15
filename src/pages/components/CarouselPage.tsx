import { Carousel } from "@/components/Carousel/Carousel";
import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";

const CarouselPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold">Carousel</h1>
        <p className="text-lg text-gray-600">
          Displays a collection of items that can be navigated through one at a
          time.
        </p>
      </header>

      <ComponentDemo
        code={`
            import { Carousel } from "@/components/Carousel/Carousel";
            
            <Carousel autoPlay autoPlayInterval={3000}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            </Carousel>
            `}
      >
        <div className="w-full max-w-2xl">
          <Carousel autoPlay autoPlayInterval={3000}>
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
      </ComponentDemo>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable
          data={[
            {
              prop: "children",
              type: "React.ReactNode",
              default: "—",
              description: "Slides displayed inside the carousel",
            },
            {
              prop: "className",
              type: "string",
              default: "—",
              description: "Additional CSS classes for the carousel",
            },
            {
              prop: "autoPlay",
              type: "boolean",
              default: "false",
              description: "Automatically advances to the next slide",
            },
            {
              prop: "autoPlayInterval",
              type: "number",
              default: "3000",
              description:
                "Time in milliseconds between automatic slide changes",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default CarouselPage;
