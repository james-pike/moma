import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";
import IconArrowDownRight from "~/components/icons/IconArrowDownRight"

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

  const {
    id,
    title = null,
    subtitle = null,
    highlight = null,
    items = [],
    isDark = false,
    classes = {},
  } = props;

  return (
    <section class="relative bg-gradient-to-r from-primary-50 to-primary-25" {...(id ? { id } : {})}>
      {/* <svg class="absolute bg-gradient-to-r from-primary-100 to-primary-50 inset-0 w-full h-full -z-[1]" aria-hidden="true">
        <defs>
          <pattern
            id="coffee-pattern"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coffee"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg>          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#coffee-pattern)" />
      </svg>     */}
      
        <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge("relative text-default px-4 md:px-6 py-9 md:py-12 lg:py-15 mx-auto max-w-6xl", isDark ? "dark" : "")}
      >
        <Headline
          title={title}
          subtitle={subtitle}
          highlight={highlight}
          classes={{
            container: "max-w-xl sm:mx-auto lg:max-w-2xl",
            title: "sm:text-4xl text-3xl",
            ...(classes?.headline ?? {}),
          }}
        />

        <ItemGrid
          items={items}
          defaultIcon={IconArrowDownRight}
          classes={{
            panel: "max-w-none p-5 bg-white shadow-md rounded-md border-2 border-primary-100 dark:border-gray-700",
            ...(classes?.items ?? {}),
          }}
        />




      </div>
    </section>
  );
});
