import { component$ } from "@builder.io/qwik";
import { ItemGrid2 } from "../ui/ItemGrid2";
import { PageWrapper } from "../common/PageWrapper";
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
      <PageWrapper>
<Card.Root class="mb-2">
                                <Card.Content class="bg-gray-100 px-2 dark:bg-gray-800 items-center">
                                <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />

                                </Card.Content>
                            </Card.Root>        <ItemGrid2
          items={items}
          classes={{
            panel: "max-w-none",
            ...(classes?.items ?? {}),
          }}
        />
      </PageWrapper>
    </section>
  );
});


