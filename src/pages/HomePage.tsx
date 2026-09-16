import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const componentCatalog = [
  "Button",
  "Card",
  "Modal",
  "Input",
  "Navbar",
  "Carousel",
  "Tooltip",
  "Layout",
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10 pb-8 text-(--text-color)">
      <section className="surface-card overflow-hidden rounded-[28px] px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
            Reusable • Customizable • Type-Safe
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-(--text-color) sm:text-5xl lg:text-6xl">
            Build beautiful interfaces
            <span className="mt-2 block text-indigo-600 dark:text-indigo-400">
              with ease.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-(--muted-text) sm:text-lg">
            A modern React component library built with TypeScript and Tailwind
            CSS, designed for clean product experiences and fast UI development.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/components")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Explore Components
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/showcase")}
              className="rounded-xl border border-(--border-color) bg-(--surface-alt) px-5 py-3 text-sm font-semibold text-(--text-color) transition hover:border-indigo-300 hover:text-indigo-600"
            >
              View Showcase
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-8 sm:px-8 lg:px-10">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
            Components
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-(--text-color)">
            Browse the building blocks.
          </h2>
          <p className="text-(--muted-text)">
            Reusable interface primitives for modern, polished product work.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {componentCatalog.map((component) => (
            <button
              key={component}
              onClick={() => navigate(`/components/${component.toLowerCase()}`)}
              className="group flex items-center justify-between rounded-2xl border border-(--border-color) bg-(--surface-alt) px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-(--accent-soft)"
            >
              <span className="text-base font-semibold text-(--text-color)">
                {component}
              </span>
              <ArrowRight
                size={16}
                className="text-(--muted-text) transition group-hover:text-indigo-600"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="surface-card rounded-[28px] px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-(--text-color)">
            Build real interfaces with EaseUI
          </h2>
          <p className="mt-3 text-base text-(--muted-text)">
            See how these components work together to create complete, realistic
            product experiences.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate("/showcase")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              View Showcase
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
