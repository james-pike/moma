import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/sections/Contact";
import FAQ from "~/components/sections/FAQ";
import Features from "~/components/sections/Features";
import Menu from "~/components/sections/Menu";
import Portfolio from "~/components/sections/Portfolio";
import Process from "~/components/sections/Process";
import Reviews from "~/components/sections/Reviews";
import Services from "~/components/sections/Services";
import Tech from "~/components/sections/Tech";
import { Card } from "~/components/ui/Card";
import { HeroHeadline } from "~/components/ui/HeroHeadline";
import { SITE } from "~/config.mjs";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));


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


        <Services title="What We Offer"
          subtitle="Browse past work from our clients."
          highlight="Services"
        />

<Features title="What You Get"
          subtitle="Browse past work from our clients."
          highlight="Features"
          items={[
            {
              title: "Qwik + Tailwind CSS Integration",
              description:
                "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
              icon: IconBrandTailwind,
            },
            {
              title: "Ready-to-use Components",
              description:
                "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
              icon: IconApps,
            },
            {
              title: "Best Practices",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            },
            {
              title: "Excellent Page Speed",
              description:
                "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
              icon: IconRocket,
            },
            {
              title: "Search Engine Optimization (SEO)",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
              icon: IconBrandGoogle,
            },
            {
              title: "Open to new ideas and contributions",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
              icon: IconBulb
            },
          ]}
        />


        <Portfolio title="Gallery Of Past Work"
          subtitle="Browse past work from our clients."
          highlight="Portfolio"
        />

<Process title="Our Design Process"
          subtitle="Browse past work from our clients."
          highlight="Steps"
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
