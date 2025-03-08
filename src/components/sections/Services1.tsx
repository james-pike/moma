import { component$ } from "@builder.io/qwik";

import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";
import ServicesCarousel from "../widgets/ServicesCarousel";
import ServiceTabs from "../widgets/ServiceTabs";

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
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;


  return (
    <section >

      <div class="flex flex-col gap-0.5">
        <Card.Root>
          <Card.Content>
            <div class="flex justify-between">
            <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="left" />
            {/* <a href="/contact"
              class="p-2 bg-blue-50 mb-1 self-end rounded-sm flex items-center h-full dark:bg-gray-800 border border-blue-200 dark:border-gray-700">
              Get A Quote                </a> */}
            </div>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Content class="p-0">
            <ServiceTabs />                                </Card.Content>
        </Card.Root>


        <ServicesCarousel />
      </div>

    </section>
  );
});


