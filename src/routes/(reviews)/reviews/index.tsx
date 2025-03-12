import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Reviews from "~/components/sections/Reviews";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
<Reviews title="What Our Guests Say"
        subtitle="See what our customers love about our café!"
        highlight="Reviews"
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
