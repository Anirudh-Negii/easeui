import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10 py-4">
      <header className="mb-8 space-y-3">
        <h1 className="text-4xl font-bold text-(--text-color)">Layout</h1>
        <p className="text-lg text-(--muted-text)">
          Provides a consistent container for organizing and spacing page
          content.
        </p>
      </header>

      <ComponentDemo
        code={`
            import { Layout } from "@/components/Layout/Layout";

            <Layout>
                <div>Content inside the Layout</div>
            </Layout>
        `}
      >
        <Layout>
          <div className="rounded-2xl border border-(--border-color) bg-(--surface-alt) p-6 text-center text-(--text-color)">
            Content inside the Layout
          </div>
        </Layout>
      </ComponentDemo>

      <section className="space-y-4">
        <h2 className="mt-2 text-2xl font-semibold text-(--text-color)">API Reference</h2>

        <PropsTable
          data={[
            {
              prop: "children",
              type: "React.ReactNode",
              default: "—",
              description: "Content displayed inside the layout",
            },
            {
              prop: "className",
              type: "string",
              default: "—",
              description: "Additional CSS classes for the layout",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default LayoutPage;
