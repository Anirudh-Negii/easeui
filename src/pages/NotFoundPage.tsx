import { useNavigate } from "react-router";
import { Button } from "@/components/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-indigo-600 dark:text-indigo-400">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">Page not found</h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
