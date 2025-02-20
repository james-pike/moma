import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { qwikSerialized } from "~/utils/qwikSerialized";

const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";
import ReviewsIndex from "~/components/widgets/ReviewsIndex";
import Contact from "~/components/widgets/Contact";
import Hero3 from "~/components/widgets/Hero3";
import Services from "~/components/widgets/Services";

export default component$(() => {
  return (
    <>
      <Hero3 />

      <Services id="menu"
        highlight="Menu"
        title="Explore Our Menu"
        subtitle="Featuring expertly crafted coffee, tea lattes, and cold drinks, alongside a diverse selection of Middle Eastern, North African, European, South Asian, and Canadian dishes—plus decadent cakes and sweets, all at an affordable price."
        items={[
       
          {
            title: "Custom-Coded, High-Performance Design",
            description:
              "We build fully custom-coded websites tailored to your brand, ensuring a unique digital presence with optimized performance and maintainability.",
            icon: IconBulb,
          },
          {
            title: "Blazing Fast Page Speeds",
            description:
              "Performance is at the core of our development approach—fast-loading pages improve user experience, increase engagement, and boost search engine rankings.",
            icon: IconRocket,
          },
          {
            title: "Search Engine Optimization (SEO)",
            description:
              "From clean code to strategic on-page optimizations, we ensure your site is built with SEO best practices to improve visibility and organic reach.",
            icon: IconBrandGoogle,
          },
          {
            title: "Future-Proof & Scalable Solutions",
            description:
              "We develop with scalability in mind, ensuring your site can grow with your business while remaining lightweight, maintainable, and adaptable.",
            icon: IconApps,
          },
          {
            title: "Ready-to-use Components",
            description:
              "Beautifully crafted UI components built with Tailwind CSS, ready for use in marketing websites, SaaS platforms, blogs, personal brands, and small businesses.",
            icon: IconApps,
          },
          {
            title: "Open to New Ideas & Contributions",
            description:
              "We embrace collaboration and innovation—whether it's refining designs, integrating new technologies, or optimizing user experience, we welcome fresh ideas.",
            icon: IconBulb,
          }
          
        ]}
      />
 
   
      {/* <Features id="menu"
        highlight="Menu"
        title="Explore Our Menu"
        subtitle="Featuring expertly crafted coffee, tea lattes, and cold drinks, alongside a diverse selection of Middle Eastern, North African, European, South Asian, and Canadian dishes—plus decadent cakes and sweets, all at an affordable price."
        items={[
       
          {
            title: "Custom-Coded, High-Performance Design",
            description:
              "We build fully custom-coded websites tailored to your brand, ensuring a unique digital presence with optimized performance and maintainability.",
            icon: IconBulb,
          },
          {
            title: "Blazing Fast Page Speeds",
            description:
              "Performance is at the core of our development approach—fast-loading pages improve user experience, increase engagement, and boost search engine rankings.",
            icon: IconRocket,
          },
          {
            title: "Search Engine Optimization (SEO)",
            description:
              "From clean code to strategic on-page optimizations, we ensure your site is built with SEO best practices to improve visibility and organic reach.",
            icon: IconBrandGoogle,
          },
          {
            title: "Future-Proof & Scalable Solutions",
            description:
              "We develop with scalability in mind, ensuring your site can grow with your business while remaining lightweight, maintainable, and adaptable.",
            icon: IconApps,
          },
          {
            title: "Ready-to-use Components",
            description:
              "Beautifully crafted UI components built with Tailwind CSS, ready for use in marketing websites, SaaS platforms, blogs, personal brands, and small businesses.",
            icon: IconApps,
          },
          {
            title: "Open to New Ideas & Contributions",
            description:
              "We embrace collaboration and innovation—whether it's refining designs, integrating new technologies, or optimizing user experience, we welcome fresh ideas.",
            icon: IconBulb,
          }
          
        ]}
      /> */}
      {/* <Services
        highlight="Services"
        title="What We Offer"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
         
        ]}
      /> */}
      {/* <Steps/> */}
      <ReviewsIndex highlight="Reviews"
        title="What our guests say"
        subtitle="See what our customers love about our café—great coffee, delicious food, and a welcoming atmosphere."
        items={[
          
        ]}/>
      {/* <FAQindex
        title="Frequently Asked Questions"
        
        highlight="FAQs"
        items={[
          
        ]}
      /> */}
             {/* <Pricing
        highlight="Features"
        title="What you get with Qwinds"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
          {
            title: "Qwik + Tailwind CSS Integration",
            description:
              "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
            icon: IconBrandTailwind,
          },
          {
            title: "Ready-to-use Component",
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
      />  */}
    {/* <FAQs title="Frequently Asked Questions"
            subtitle="Have questions about our café? Find answers to common inquiries below."
            highlight="FAQs"
            items={[
           
              {
                title: "Do you have vegetarian or gluten-free options?",
                description:
                  "Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!",
              },
          
              {
                title: "Do you offer takeout?",
                description:
                  "Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.",
              },
              {
                title: "Can I bring my laptop and work from the café?",
                description:
                  "Of course! We have free Wi-Fi and plenty of outlets, making our café a great spot for remote work or studying.",
              },
              {
                title: "Do you take reservations?",
                description:
                  "We operate mostly on a walk-in basis, but for larger groups or special occasions, feel free to give us a call to arrange a reservation.",
              },
              {
                title: "Is there outdoor seating available?",
                description:
                  "Absolutely! Enjoy your coffee or meal in our cozy outdoor seating area, perfect for sunny days and fresh air.",
              },
              {
                title: "What are your opening hours?",
                description:
                  "We’re open daily from 7 AM to 8 PM. Join us for a morning coffee, a relaxed lunch, or an evening treat!",
              },
            ]}/> */}
    
    
      <Contact/>
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
