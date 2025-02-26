import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero3 from "~/components/widgets/Hero3";
import ServicesX from "~/components/widgets/ServicesX";
import Headliner from "~/components/widgets/Headliner";
import Menu from "~/components/widgets/Menu";


export default component$(() => {
  return (
    <>
      <Hero3 />
      <Headliner title="Digital Art & Restoration"
              subtitle="Specializing in photography and fine art printing."
            
              items={[]}/>
  
    
<ServicesX title="What We Do"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Services"
              items={[]}/>

<Menu title="Gallery Of Past Work"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="Portfolio"
              items={[]}/>
     

  
    
    
    
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
