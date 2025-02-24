import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ReviewPage from "~/components/widgets/ReviewPage";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<ReviewPage title="What Our Guests Say"
        subtitle="See what our customers love about our café"
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
