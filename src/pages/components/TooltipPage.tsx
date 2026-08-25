import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";

const TooltipPage = () => {
  const basicUsageCode = `
    import { Tooltip } from "@/components/Tooltip/Tooltip";
    import { Button } from "@/components/Button/Button";

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
  `;

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

        <ComponentDemo code={basicUsageCode}>
          <div className="flex items-center justify-center gap-12 flex-wrap">
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
            <Tooltip content="Appears after 1 second" delay={1000}>
              <Button variant="outline">Delayed Tooltip</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable
          data={[
            {
              prop: "content",
              type: "React.ReactNode",
              default: "—",
              description: "Content displayed inside the tooltip",
            },
            {
              prop: "side",
              type: '"top" | "bottom" | "left" | "right"',
              default: '"top"',
              description: "Position of the tooltip relative to the trigger",
            },
            {
              prop: "delay",
              type: "number",
              default: "300",
              description: "Delay in milliseconds before showing the tooltip",
            },
            {
              prop: "className",
              type: "string",
              default: "—",
              description: "Additional CSS classes for the tooltip",
            },
            {
              prop: "children",
              type: "React.ReactElement",
              default: "—",
              description: "Element that triggers the tooltip",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default TooltipPage;
