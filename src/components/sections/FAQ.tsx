import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import FAQAccordion from "../widgets/FAQAccordion";
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
    <section class="relative p-0 bg-primary-100 scroll-mt-16" {...(id ? { id } : {})}>
    
      <div
        class={twMerge(
          "relative mx-auto max-w-7xl bg-gray-100 px-5 md:px-6 py-10 md:py-16 lg:py-20 text-default ",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
    <div class="block sm:hidden">
    <FAQAccordion/>
    </div>

    <div class="hidden sm:block">
    <ItemGrid2
            items={items}
            
          
            classes={{
              container: "md:grid-cols-2 max-w-5xl",
              panel: "max-w-none",
              ...(classes?.items ?? {}),
            }}
          />

    </div>
   
      </div>
    </section>

     
  );
});


