import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FAQ from "~/components/sections/FAQ";
import LogoClouds from "~/components/sections/LogoClouds";
import { Headline } from "~/components/ui/Headline";
import { HeroHeadline } from "~/components/ui/HeroHeadline";
import FAQAccordion from "~/components/widgets/FAQAccordion";
import ServicesCarousel from "~/components/widgets/ServicesCarousel";
import { SITE } from "~/config.mjs";





export default component$(() => {
  return (
    <>
      <div class="pb-0.5">
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
      </div>

      <LogoClouds title="Our Tech & Design Stack"
        subtitle="The cutting-edge tehcnology powering our designs."
        highlight="Technologies"
        items={[


        ]} />



      <div class="headercard flex flex-col gap-4 bg-yellow-50">
        <Headline title="What We Offer"
          highlight="Services"
          subtitle="Transform your online presence with our custom web design and development services. "
          classes={{
            // title: "text-4.5xl", // Overrides the default "text-4xl md:text-5xl"
            align: "left"
          }}>
        </Headline>
        <ServicesCarousel />
      </div>



      <div class="headercard flex flex-col gap-4">
        <Headline title="Frequently Asked Questions"
          highlight="FAQ"
          subtitle="Transform your online presence with our custom web design and development services. "
          classes={{
            // title: "text-4.5xl", // Overrides the default "text-4xl md:text-5xl"
            align: "center"
          }}>
        </Headline>
        <FAQAccordion />
      </div>

      <FAQ title="Frequently Asked Questions"
        subtitle="Find answers to common inquiries about our cafe."
        highlight="FAQs"
        items={[




        ]} />








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
