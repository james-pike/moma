import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero3 from "~/components/widgets/Hero3";
import Carousel from "~/components/widgets/Carousel";


export default component$(() => {
  return (
    <>
      <Hero3 />
    
<Carousel/>
     

  
    
    
    
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
