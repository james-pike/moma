import { component$ } from "@builder.io/qwik";
import FAQAccordion from "../widgets/FAQAccordion";
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";



interface Props {
    id?: string;
    title?: any;
    subtitle?: any;
    highlight?: any;
    classes?: any;
}

export default component$((props: Props) => {
    const { id, title = "", subtitle = "", highlight = "", classes = {} } = props;

    return (
        <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
            <Card.Root class="">
                <Card.Header>
                    <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="left" />

                </Card.Header>
                <Card.Content class="relative">
                    <FAQAccordion />

                </Card.Content>


                <Card.Footer class="flex justify-end">
                    View More FAQs
                </Card.Footer>
            </Card.Root>

        </section>
    );
});


