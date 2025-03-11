import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/sections/Contact";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Contact title="Request A Quote"
subtitle="Get in touch for a consultation."
        highlight="Contact Us"
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
