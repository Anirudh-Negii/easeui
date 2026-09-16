import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Tooltip } from "@/components/Tooltip";
import { Modal } from "@/components/Modal";

const ShowcasePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <Navbar />

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-5">
          <h1 className="text-5xl font-bold tracking-tight">
            Build Beautiful Interfaces Faster
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Create modern, reusable interfaces with EaseUI's collection of
            customizable React components.
          </p>

          <div className="flex justify-center gap-3 pt-3">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Explore Components</Button>
          </div>
        </div>
      </section>

      <section className="space-y-6 py-12">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Component showcase
          </p>

          <h2 className="mt-1 text-3xl font-bold">Everything works together</h2>

          <p className="mt-2 text-gray-500">
            Combine components to create complete interface sections.
          </p>
        </div>

        <Carousel autoPlay autoPlayInterval={3500}>
          <Card>
            <div className="space-y-3 p-6">
              <h3 className="text-2xl font-semibold">Dashboard</h3>
              <p className="text-gray-500">
                Cards, buttons, inputs and other components can be combined into
                useful layouts.
              </p>
              <Button variant="primary">View Dashboard</Button>
            </div>
          </Card>

          <Card>
            <div className="space-y-3 p-6">
              <h3 className="text-2xl font-semibold">Product Interface</h3>
              <p className="text-gray-500">
                Build product pages with reusable components and consistent
                styling.
              </p>
              <Button variant="outline">View Product</Button>
            </div>
          </Card>

          <Card>
            <div className="space-y-3 p-6">
              <h3 className="text-2xl font-semibold">User Forms</h3>
              <p className="text-gray-500">
                Inputs, buttons and tooltips can be combined to create simple
                forms.
              </p>
              <Input placeholder="Enter your email" type="email" />
            </div>
          </Card>
        </Carousel>
      </section>

      <section className="space-y-6 py-12">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Built for developers
          </p>

          <h2 className="mt-1 text-3xl font-bold">Simple building blocks</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Reusable</h3>
              <p className="text-gray-500">
                Use the same components across different parts of your
                application.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Customizable</h3>
              <p className="text-gray-500">
                Customize components using props, variants and Tailwind classes.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Type Safe</h3>
              <p className="text-gray-500">
                TypeScript provides predictable props and a better development
                experience.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <Card>
          <div className="mx-auto max-w-xl space-y-5 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Put components together</h2>

              <p className="text-gray-500">
                A simple example of combining inputs, buttons and tooltips.
              </p>
            </div>

            <div className="space-y-3 text-left">
              <Input placeholder="Your name" />

              <Input type="email" placeholder="Your email" />

              <div className="flex justify-end gap-3 pt-2">
                <Tooltip content="Submit your information" side="left">
                  <Button variant="primary">Submit</Button>
                </Tooltip>

                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Modal
        isOpen={isModalOpen}
        title="EaseUI Components"
        description="Reusable components for building modern React interfaces."
        onClose={() => setIsModalOpen(false)}
        onDone={() => setIsModalOpen(false)}
      >
        <p className="text-gray-600 dark:text-gray-300">
          Combine EaseUI components with your own application logic to create
          complete interfaces.
        </p>
      </Modal>

      <footer className="border-t border-gray-200 py-8 text-center">
        <p className="text-sm text-gray-500">
          Built with EaseUI · React · TypeScript · Tailwind CSS
        </p>
      </footer>
    </Layout>
  );
};

export default ShowcasePage;
