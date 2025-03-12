import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Tech from "~/components/sections/Tech";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Tech title="Our Design Stack"
        subtitle="The cutting-edge technology powering our designs."
        highlight="Technology"
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
