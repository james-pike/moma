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
import Menu from "~/components/widgets/Menu";
import FAQindex from "~/components/widgets/FAQindex";


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
            title: "Scalable Solutions",
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

      <Menu title="Frequently Asked Questions"
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
          
              ]}/>

  
      <ReviewsIndex highlight="Reviews"
        title="What our guests say"
        subtitle="See what our customers love about our café—great coffee, delicious food, and a welcoming atmosphere."
        items={[
          
        ]}/>

<FAQindex title="Frequently Asked Questions"
              subtitle="Have questions about our café? Find answers to common inquiries below."
              highlight="FAQs"
              items={[
               
            
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
                {
                  title: "Do you have vegetarian or gluten-free options?",
                  description:
                    "Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!",
                },
            
                {
                  title: "Do you offer takeout?",
                  description:
                    "Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.",
                },]}/>
 
    
    
    
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
