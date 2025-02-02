import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Services from "~/components/widgets/Services";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
 <Services
        highlight="Services"
        title="What We Offer"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
         
        ]}
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
