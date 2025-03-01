import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import FAQAccordion from "../widgets/FAQAccordion";
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
    <section class="relative p-0 bg-gray-100 scroll-mt-16" {...(id ? { id } : {})}>
      <PageWrapper>
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
        <div class="block sm:hidden">
          <FAQAccordion />
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
      </PageWrapper>
    </section>
  );
});


