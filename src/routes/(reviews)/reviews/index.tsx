import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Reviews2 from "~/components/widgets/Reviews2";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Reviews2 title="What Our Guests Say"
        subtitle="See what our customers love about our café!"
        highlight="Reviews"
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
