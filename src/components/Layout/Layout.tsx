import { cn } from "@/libs/utils";

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 py-6 space-y-6", className)}>
      {children}
    </div>
  );
};

export { Layout };
