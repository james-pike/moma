import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Story from "~/components/widgets/Story";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Story/>
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
