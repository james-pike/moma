import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Services from "~/components/sections/Services";
import Menu from "~/components/sections/Menu";
import FAQ from "~/components/sections/FAQ";
import Reviews from "~/components/sections/Reviews";
import Contact from "~/components/sections/Contact";
import Hero from "~/components/sections/Hero";
import Steps from "~/components/sections/Steps";
import Stats from "~/components/widgets/Stats";



export default component$(() => {
  return (
    <>
      <Hero />



      <Services title="What We Do"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Services"
        items={[]} />

      <Steps title="Our Process"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Steps To Success"
        items={[]} />

      <Menu title="Gallery Of Past Work"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Portfolio"
        items={[]} />

      <Reviews title="What Our Clients Say"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Reviews"
        items={[]} />

      <FAQ title="Frequently Asked Questions"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="FAQ"
        items={[]} />

        <Stats/>

      <Contact />


    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
