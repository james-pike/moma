import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Stats from "~/components/widgets/Stats";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Stats/>
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
