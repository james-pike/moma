import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/sections/Contact";
import FAQ from "~/components/sections/FAQ";
import LogoClouds from "~/components/sections/LogoClouds";
import Portfolio from "~/components/sections/Portfolio";
import Services from "~/components/sections/Services";
import { HeroHeadline } from "~/components/ui/HeroHeadline";
import { SITE } from "~/config.mjs";





export default component$(() => {
  return (
    <>
      <div class="flex flex-col gap-2">
        <div class="herocard ">
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


        </div>

     

        <FAQ title="Frequently Asked Questions"
          subtitle="Find answers to common inquiries about our cafe."
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
