import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";

type Props = {};

const HomeLayout = ({}: Props) => {
  return (
    <div className="min-h-screen bg-(--bg-color) text-(--text-color)">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-4 md:px-6 lg:px-8">
        <Navbar />
        <main className="grow pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
