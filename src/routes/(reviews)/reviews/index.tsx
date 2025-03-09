import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LogoClouds from "~/components/sections/LogoClouds";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<LogoClouds title="Our Tech & Design Stack"
        subtitle="See what our customers love about our café!"
        highlight="Technologies"
        items={[
     
    
        ]}/>

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
