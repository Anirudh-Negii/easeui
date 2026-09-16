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
    <Layout className="py-6 md:py-8">
      <div className="space-y-8 pb-8">
        <div
          role="note"
          className="flex flex-col gap-1 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between dark:border-indigo-400/20 dark:bg-indigo-400/10"
        >
          <p className="font-semibold text-indigo-950 dark:text-indigo-100">
            EaseUI showcase preview
          </p>
          <p className="text-indigo-800 dark:text-indigo-200">
            This page demonstrates how EaseUI components can work together. It
            is a visual example, not a live website.
          </p>
        </div>

        <Navbar />

        <section className="rounded-[28px] border border-(--border-color) bg-(--surface) px-6 py-14 text-center shadow-(--shadow-soft) sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
              Build better product UI
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-(--text-color) sm:text-5xl">
              Create polished experiences with fewer design decisions.
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-(--muted-text)">
              Use reusable, developer-friendly building blocks to design modern
              digital products with consistency and speed.
            </p>

            <div className="flex justify-center gap-3 pt-3">
              <Button variant="primary">Get Started</Button>
              <Button variant="outline">Explore Components</Button>
            </div>
          </div>
        </section>

        <section className="space-y-6 py-2">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
              Component showcase
            </p>

            <h2 className="text-3xl font-bold text-(--text-color)">
              Everything works together
            </h2>

            <p className="text-(--muted-text)">
              Combine components to create complete interface sections with a
              consistent visual language.
            </p>
          </div>

          <Carousel autoPlay autoPlayInterval={3500}>
            <Card className="border border-(--border-color) bg-(--surface)">
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-(--text-color)">
                  Dashboard
                </h3>
                <p className="text-(--muted-text)">
                  Cards, buttons, inputs, and layouts come together to support
                  rich product workflows.
                </p>
                <Button variant="primary">View Dashboard</Button>
              </div>
            </Card>

            <Card className="border border-(--border-color) bg-(--surface)">
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-(--text-color)">
                  Product Interface
                </h3>
                <p className="text-(--muted-text)">
                  Build product pages with reusable, scalable components that
                  stay visually coherent.
                </p>
                <Button variant="outline">View Product</Button>
              </div>
            </Card>

            <Card className="border border-(--border-color) bg-(--surface)">
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-(--text-color)">
                  User Forms
                </h3>
                <p className="text-(--muted-text)">
                  Inputs, buttons, and tooltips can be composed into complete
                  user journeys.
                </p>
                <Input placeholder="Enter your email" type="email" />
              </div>
            </Card>
          </Carousel>
        </section>

        <section className="space-y-6 py-2">
          <div>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
              Built for developers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-(--text-color)">
              Simple building blocks
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-(--border-color) bg-(--surface)">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-(--text-color)">
                  Reusable
                </h3>
                <p className="text-(--muted-text)">
                  Use the same components across different parts of your
                  application.
                </p>
              </div>
            </Card>

            <Card className="border border-(--border-color) bg-(--surface)">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-(--text-color)">
                  Customizable
                </h3>
                <p className="text-(--muted-text)">
                  Customize components using props, variants and Tailwind
                  classes.
                </p>
              </div>
            </Card>

            <Card className="border border-(--border-color) bg-(--surface)">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-(--text-color)">
                  Type Safe
                </h3>
                <p className="text-(--muted-text)">
                  TypeScript provides predictable props and a better development
                  experience.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-2">
          <Card className="border border-(--border-color) bg-(--surface)">
            <div className="mx-auto max-w-xl space-y-5 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-(--text-color)">
                  Put components together
                </h2>

                <p className="text-(--muted-text)">
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

                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(true)}
                  >
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
          <p className="text-(--muted-text)">
            Combine EaseUI components with your own application logic to create
            complete interfaces.
          </p>
        </Modal>

        <footer className="border-t border-(--border-color) py-8 text-center">
          <p className="text-sm text-(--muted-text)">
            Built with EaseUI · React · TypeScript · Tailwind CSS
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default ShowcasePage;
