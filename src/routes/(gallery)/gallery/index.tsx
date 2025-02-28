import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Menu from "~/components/sections/Menu";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
<Menu title="Gallery Of Past Work"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Portfolio"
              items={[]}/>
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
