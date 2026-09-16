import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `
      import { Navbar } from "@/components/navbar";

      <Navbar />
  `;

  return (
    <div>
      <header className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold">Navbar</h1>
        <p className="text-lg text-gray-600">
          Provides a navigation bar for organizing links and actions.
        </p>
      </header>

      <ComponentDemo code={usageCode}>
        <Navbar />
      </ComponentDemo>

      <section className="space-y-4 mt-2">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable
          data={[
            {
              prop: "variant",
              type: '"dark" | "light" | "primary" | "glass"',
              default: '"light"',
              description: "Visual style of the navbar",
            },
            {
              prop: "size",
              type: '"default" | "sm" | "lg" | "xl"',
              default: '"default"',
              description: "Height of the navbar",
            },
            {
              prop: "asChild",
              type: "boolean",
              default: "false",
              description: "Render the navbar using a child element",
            },
            {
              prop: "animation",
              type: 'keyof typeof entranceAnimations',
              default: '"fadeIn"',
              description: "Entrance animation applied to the navbar",
            },
            {
              prop: "hoverAnimation",
              type: 'keyof typeof hoverAnimations',
              default: '"none"',
              description: "Hover animation applied to the navbar",
            },
            {
              prop: "className",
              type: "string",
              default: "—",
              description: "Additional CSS classes for the navbar",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default NavbarPage;
