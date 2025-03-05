import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LogoClouds from "~/components/sections/LogoClouds";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<LogoClouds title="Our Tech Stack"
subtitle="Explore the cutting-edge technologies powering our design solutions."
        
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
