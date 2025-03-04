import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid2 } from "../ui/ItemGrid2";
import { PageWrapper } from "../common/PageWrapper";

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
  const { id, title = "", subtitle = "", highlight = "", items = [], classes = {} } = props;

  return (
    <>
      {/* <head>
    <link rel="preload" href="/images/hero1.webp" as="image"/>
    </head> */}
      <section class="relative p-0 scroll-mt-16" {...(id ? { id } : {})}>
        <PageWrapper>
          <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
          <ItemGrid2
            items={items}
            classes={{
              container: "md:grid-cols-2 max-w-5xl",
              title: "md:text-[1.3rem]",
              icon: "text-white bg-primary-400 dark:bg-primary-600 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
              ...(classes?.items ?? {}),
            }}
          />
        </PageWrapper>
      </section>
    </>

  );
});
