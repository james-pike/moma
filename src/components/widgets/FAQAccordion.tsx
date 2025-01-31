import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';


export default component$(() => {
  return (
    <Accordion.Root class="w-full">
      <Accordion.Item>
        <Accordion.Trigger class="text-md" header="h2">Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA sdesign pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger  class="text-md" >Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components&apos;
          aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger  class="text-md">Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
});
