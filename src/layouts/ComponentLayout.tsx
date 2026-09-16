import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  return (
    <div className="flex min-h-screen text-(--text-color)">
      <aside
        className={`
          fixed left-0 top-0 z-30 flex h-full w-72 flex-col border-r border-(--border-color) bg-(--surface-strong) p-5 shadow-sm transition-transform duration-300 ease-in-out md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="mb-6 flex items-center justify-between md:justify-start">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-(--muted-text)">
            Components
          </h2>
          <button
            className="rounded-lg p-2 text-(--muted-text) hover:bg-(--surface-alt) md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="space-y-1.5">
          {components.map((item) => {
            const itemPath = `/components/${item.toLowerCase()}`;
            const active = location.pathname === itemPath;

            return (
              <button
                onClick={() => {
                  navigate(item.toLowerCase());
                  setSidebarOpen(false);
                }}
                key={item}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                  active
                    ? "bg-(--accent-soft) text-indigo-600 dark:text-indigo-300"
                    : "text-(--muted-text) hover:bg-(--surface-alt) hover:text-(--text-color)"
                }`}
              >
                <span>{item}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 overflow-auto px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="mb-4 inline-flex items-center gap-2 rounded-xl border border-(--border-color) bg-(--surface-strong) px-3 py-2 text-sm font-medium text-(--text-color) md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={18} />
          Menu
        </button>

        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
