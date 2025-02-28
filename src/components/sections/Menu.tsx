import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import MenuTabs from "../widgets/MenuTabs";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "",  classes = {}, isDark = false } = props;

  return (
    <>
    <head>
    <link rel="preload" href="/images/hero1.webp" as="image"/>
    </head>
    <section class="relative p-0 bg-primary-50 scroll-mt-16" {...(id ? { id } : {})}>
    
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl bg-white px-5 md:px-6 py-10 md:py-16 lg:py-20 text-default ",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
    <MenuTabs/>
      </div>
    </section>
</>
     
  );
});
