import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid2 } from "../ui/ItemGrid2";

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
  const { id, title = "", subtitle = "", highlight = "",  items = [], classes = {}, isDark = false } = props;

  return (
    <>
    {/* <head>
    <link rel="preload" href="/images/hero1.webp" as="image"/>
    </head> */}
    <section class="relative p-0 bg-primary-100 scroll-mt-16" {...(id ? { id } : {})}>
    
      <div
        class={twMerge(
          "relative mx-auto max-w-7xl bg-gray-100 px-5 md:px-6 py-10 md:py-16 lg:py-20 text-default ",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
   
        <ItemGrid2
          items={items}
       
          classes={{
            container: "md:grid-cols-2 max-w-5xl",
            title: "md:text-[1.3rem]",
            icon: "text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
            ...(classes?.items ?? {}),
          }}
        />
      </div>
    </section>
    </>
     
  );
});
