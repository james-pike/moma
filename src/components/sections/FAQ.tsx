import { component$ } from "@builder.io/qwik";
import FAQAccordion from "../widgets/FAQAccordion";
import { ItemGrid2 } from "../ui/ItemGrid2";
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";

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
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
     
     <Card.Root class="mb-0.5">
                                <Card.Content class="">
                                <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />

                                </Card.Content>
                            </Card.Root>

                            <Card.Root>
                            <Card.Content class="py-0 items-center">
                            <FAQAccordion/>  
                            </Card.Content>
                            </Card.Root>
          
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

    </section>
  );
});


