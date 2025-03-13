import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/sections/Contact";
import FAQ from "~/components/sections/FAQ";
import Menu from "~/components/sections/Menu";
import Portfolio from "~/components/sections/Portfolio";
import Reviews from "~/components/sections/Reviews";
import Tech from "~/components/sections/Tech";
import Test from "~/components/sections/Test";
import { Card } from "~/components/ui/Card";
import { HeroHeadline } from "~/components/ui/HeroHeadline";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
    {/* <Hero/> */}
      <div class="flex flex-col gap-2">

<Card.Root class="py-8 px-4">
<div class="flex flex-col">
            <HeroHeadline title="Premium Web Design & Development"
              subtitle="Transform your online presence with our custom web design and development services. 
          We help business create stunning, fast, and secure websites."
              classes={{
                title: "text-4.5xl" // Overrides the default "text-4xl md:text-5xl"
              }}>
            </HeroHeadline>
            <div class=" sm:max-w-md  grid grid-cols-1 pt-4 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">

              <a class="btn2" href="/contact">Get A Quote

              </a>
              <a class="btn2" href="/contact">Book A Consultation

              </a>
            </div>
          </div>
</Card.Root>


        <Test title="What We Offer"
          subtitle="Browse past work from our clients."
          highlight="Services"
        />


        <Portfolio title="Gallery Of Past Work"
          subtitle="Browse past work from our clients."
          highlight="Portfolio"
        />

        <Tech title="Our Design Stack"
          subtitle="The cutting-edge technology powering our designs."
          highlight="Technology"
        />

<Menu title="Menu & Product Gallery"
          subtitle="Browse past work from our clients."
          highlight="Menu/Products"
        />

        <Reviews title="What Our Guests Say"
          subtitle="See what our customers love about our café!"
          highlight="Reviews"
        />

        <FAQ title="Frequently Asked Questions"
          subtitle="Find answers to common inquiries."
          highlight="FAQs"
        />


        <Contact title="Request A Quote"
          subtitle="Get in touch for a consultation."
          highlight="Contact Us"
        />


      </div>




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
