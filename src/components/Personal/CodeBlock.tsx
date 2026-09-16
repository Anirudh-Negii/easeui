import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-b-2xl">
      <div className="flex items-center justify-between bg-slate-900 px-4 py-2 text-slate-100">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-300">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-100 transition hover:bg-slate-700"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-slate-950 p-4 text-sm leading-6 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
