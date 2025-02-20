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
        <div class="absolute left-0 top-0 w-full bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-20 h-[300px] bg-[url('/images/hero2.webp')] z-100"></div>

      
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
            container: "max-w-xl sm:mx-auto lg:max-w-2xl bg-white/60 p-6 rounded-md",
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
