import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import ServicesCarousel from "../widgets/ServicesCarousel";
import ServiceGrid from "../widgets/ServiceGrid";
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";
import FAQAccordion from "../widgets/FAQAccordion";

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
  const { id, title = "", subtitle = "", highlight = "", classes = {} } = props;

  return (
    <>

      {/* <head>
    <link rel="preload" href="/images/hero1.webp" as="image"/>
    </head> */}
      <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
        <Card.Root class="btnx">
          <Card.Content class="">
          <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
          <div class="block pt-6 px-1 sm:hidden">
            <FAQAccordion />
          </div>
          </Card.Content>
        </Card.Root>
          <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="left" />
          <div class="block sm:hidden">
            <ServicesCarousel />
          </div>
          <div class="hidden sm:block">
            <ServiceGrid />
          </div>
      </section>
    </>
  );
});
