import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--surface) shadow-(--shadow-soft)">
      <div className="flex items-center justify-between border-b border-(--border-color) bg-(--surface-alt) px-4 py-3">
        <span className="text-sm font-medium text-(--muted-strong)">
          Preview
        </span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-(--border-color) bg-(--surface-strong) px-3 py-1.5 text-sm font-medium text-(--text-color) transition hover:border-indigo-300 hover:text-indigo-600"
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="flex min-h-52 items-center justify-center px-4 py-10">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-(--border-color)">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
