import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import ServiceGrid from "../widgets/ServiceGrid";
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
  const { id, title = "", subtitle = "", highlight = "",  classes = {}, isDark = false } = props;

  return (
    <section class="relative p-0 bg-gray-100 scroll-mt-16" {...(id ? { id } : {})}>
    
     <PageWrapper>
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="center" />
    <ServiceGrid/>
      </PageWrapper>
    </section>

     
  );
});
