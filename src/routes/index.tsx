import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Services from "~/components/sections/Services";
import Menu from "~/components/sections/Menu";
import FAQ from "~/components/sections/FAQ";
import Reviews from "~/components/sections/Reviews";
import Contact from "~/components/sections/Contact";
import Hero from "~/components/sections/Hero";
import Steps from "~/components/sections/Steps";
import Stats from "~/components/widgets/Stats";



export default component$(() => {
  return (
    <>
      <Hero />



      <Services title="What We Do"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Services"
        items={[]} />

      <Steps title="Our Process"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Steps To Success"
        items={[]} />

      <Menu title="Gallery Of Past Work"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Portfolio"
        items={[]} />

      <Reviews title="What Our Clients Say"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Reviews"
        items={[]} />

      <FAQ title="Frequently Asked Questions"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="FAQ"
        items={[
            {
              title: "What do I need to start?",
              description:
                "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            },
            {
              title: "How to install the Qwik + Tailwind CSS template?",
              description:
                "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
            },
            {
              title: "What's something that you don't understand?",
              description:
                "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
            },
            {
              title: "What's an example of when you changed your mind?",
              description:
                "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
            },
            {
              title: "What is something that you would like to try again?",
              description:
                "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
            },
            {
              title: "If you could only ask one question to each person you meet, what would that question be?",
              description:
                "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
            },
          ]}

       />

        <Stats/>

      <Contact />


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
