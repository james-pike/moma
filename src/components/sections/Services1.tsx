import { component$ } from "@builder.io/qwik";

import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";
import ServicesCarousel from "../widgets/ServicesCarousel";
import MenuTabs from "../widgets/MenuTabs";

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
  const {  title = "", subtitle = "", highlight = "", classes = {} } = props;


  return (
   <section >

    <div class="flex flex-col gap-1 pb-1">
    <Card.Root>
        <Card.Content>
                                <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="left" />
                                </Card.Content>
                                </Card.Root>

                                <Card.Root>
        <Card.Content>
<MenuTabs/>                                </Card.Content>
                                </Card.Root>

                                
                                <ServicesCarousel/>
                                </div>
                                
        </section>
  );
});


