import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';


export default component$(() => {
  return (
<Accordion.Root class="w-full px-0">
<Accordion.Item>
    <Accordion.Trigger class="text-md">
      Is there outdoor seating available?
    </Accordion.Trigger>
    <Accordion.Content>
      Absolutely! Enjoy your coffee or meal in our cozy outdoor seating area, perfect for sunny days and fresh air.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger class="text-md">
      What are your opening hours?
    </Accordion.Trigger>
    <Accordion.Content>
      We’re open daily from 7 AM to 8 PM. Join us for a morning coffee, a relaxed lunch, or an evening treat!
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger class="text-md">
      Do you offer takeout?
    </Accordion.Trigger>
    <Accordion.Content>
      Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger class="text-md">
      Can I bring my laptop and work from the café?
    </Accordion.Trigger>
    <Accordion.Content>
      Of course! We have free Wi-Fi and plenty of outlets, making our café a great spot for remote work or studying.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger class="text-md">
      Do you take reservations?
    </Accordion.Trigger>
    <Accordion.Content>
      We operate mostly on a walk-in basis, but for larger groups or special occasions, feel free to give us a call to arrange a reservation.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger class="text-md">
      Do you have vegetarian or gluten-free options?
    </Accordion.Trigger>
    <Accordion.Content>
      Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!
    </Accordion.Content>
  </Accordion.Item>

</Accordion.Root>

  );
});
