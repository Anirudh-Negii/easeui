import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme,
  );

  const navItems = [
    { label: "Components", path: "/components" },
    { label: "Showcase", path: "/showcase" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="surface-card sticky top-4 z-30 mb-8 flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-lg px-2 py-1 text-left transition hover:bg-(--accent-soft) focus-visible:outline-none"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white shadow-sm">
            E
          </div>
          <span className="text-lg font-semibold tracking-tight text-(--text-color)">
            EaseUI
          </span>
        </button>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive(item.path)
                ? "bg-(--accent-soft) text-indigo-600 dark:text-indigo-300"
                : "text-(--muted-text) hover:bg-(--surface-alt) hover:text-(--text-color)"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border-color) bg-(--surface-alt) text-(--text-color) transition hover:border-indigo-400 hover:text-indigo-600"
      >
        {mode === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-600" />}
      </button>
    </nav>
  );
};

export default Navbar;
