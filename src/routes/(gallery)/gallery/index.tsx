import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Portfolio from "~/components/sections/Portfolio";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Portfolio title="Gallery Of Past Work"
subtitle="Browse past work from our clients."
        highlight="Portfolio"
        />
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
