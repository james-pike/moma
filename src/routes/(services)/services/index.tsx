import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Services1 from "~/components/sections/Services1";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
 <Services1  
      title="What We Do"
      subtitle="Now Serving Preston, Wellington & Almonte"
      highlight="Services"
      items={[]}
      classes={{
        
        headline: { subtitle: "text-md md:text-5xl" },
      }}
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
