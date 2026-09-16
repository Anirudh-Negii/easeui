import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold">Layout</h1>
        <p className="text-lg text-gray-600">
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
          <div className="p-6 bg-gray-200 text-center">
            Content inside the Layout
          </div>
        </Layout>
      </ComponentDemo>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mt-2">API Reference</h2>

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
