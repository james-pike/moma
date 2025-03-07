import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ServicePage from "~/components/sections/ServicePage";
import Services1 from "~/components/sections/Services1";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Services1  
      title="What We Do"
      // subtitle="Have questions about our café? Find answers to common inquiries below."
      highlight="Services"
      items={[]} />
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
