import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Reviews from "~/components/widgets/Reviews";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Reviews highlight="Reviews"
        title="What Our Guests Say"
        subtitle="See what our customers love about our café—great coffee, delicious food, and a welcoming atmosphere."
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
