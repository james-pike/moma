import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LogoClouds from "~/components/sections/LogoClouds";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<LogoClouds title="What Our Clients Say"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Reviews"
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
