import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const TooltipPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>

        <p className="text-lg text-gray-600">
          Displays additional information when hovering or focusing on an
          element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <div className="border border-gray-200 rounded-lg p-20 flex items-center justify-center gap-12 flex-wrap">
          <Tooltip content="Tooltip on top" side="top">
            <Button>Top</Button>
          </Tooltip>

          <Tooltip content="Tooltip on bottom" side="bottom">
            <Button>Bottom</Button>
          </Tooltip>

          <Tooltip content="Tooltip on left" side="left">
            <Button>Left</Button>
          </Tooltip>

          <Tooltip content="Tooltip on right" side="right">
            <Button>Right</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  );
};

export default TooltipPage;