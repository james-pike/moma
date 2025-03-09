import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const menuItems = [
  { title: 'Espresso', description: 'Rich and bold espresso shot.', price: '$3.50', image: '/images/coffee.webp' },
  { title: 'Cappuccino', description: 'Rich and bold espresso shot.', price: '$4.50', image: '/images/mocha.webp' },
  { title: 'Latte', description: 'Rich and bold espresso shot.', price: '$4.00', image: '/images/mocha.webp' },
  { title: 'Mocha', description: 'Rich and bold espresso shot.', price: '$4.75', image: '/images/coffee.webp' },

];

const teaItems = [
  { title: 'Matcha', description: 'Rich and bold espresso shot.', price: '$3.50', image: '/images/tea1.webp' },
  { title: 'Green Tea', description: 'Rich and bold espresso shot.', price: '$4.50', image: '/images/tea2.webp' },
  { title: 'Black Tea', description: 'Rich and bold espresso shot.', price: '$4.00', image: '/images/tea3.webp' },
  { title: 'Earl Gray', description: 'Rich and bold espresso shot.', price: '$4.75', image: '/images/tea4.webp' },
];

export default component$(() => {
  const selectedIndex = useSignal(0); 

  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value); // Watch for tab changes

  });

  return (
    <div class="bg-black">
    <Tabs.Root selectedClassName='bg-white' class=" max-w-5xl mx-auto" selectedIndex={selectedIndex.value} onSelectedIndexChange$={(index) => (selectedIndex.value = index)}>
      {/* Responsive Tabs List sticky top-[92px] z-10 */}
      <Tabs.List class="grid grid-cols-4 border border-gray-700 py-0.5 rounded-sm sm:justify-start sm:inline-flex sm:space-x-4 w-full mb-0.5 shadow-md ">
        <Tabs.Tab class="px-4 py-2">Design</Tabs.Tab>
        <Tabs.Tab class="px-4 py-2">Develop</Tabs.Tab>
        <Tabs.Tab class="px-4 py-2">Branding</Tabs.Tab>
        <Tabs.Tab class="px-4 py-2">Marketing</Tabs.Tab>
      </Tabs.List>
      

      {/* Coffee Menu Panel */}
      <Tabs.Panel>
        <Card.Root>
          <Card.Content class="p-3">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {menuItems.map((item, index) => (
                <div key={index} class="bg-white shadow-md overflow-hidden border border-gray-200">
                  <img width={1024} height={1024} src={item.image} alt={item.title} class="w-full h-40 object-cover" />
                  <div class="p-3">
                    <h3 class="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p class="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p class="text-lg font-bold text-primary mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card.Root>
      </Tabs.Panel>

      {/* Tea Panel */}
      <Tabs.Panel>
        <Card.Root>
          <Card.Content class="p-4">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {teaItems.map((item, index) => (
                <div key={index} class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                  <img width={1024} height={1024} src={item.image} alt={item.title} class="w-full h-40 object-cover" />
                  <div class="p-3">
                    <h3 class="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p class="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p class="text-lg font-bold text-primary mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card.Root>
      </Tabs.Panel>

      {/* Bistro Panel */}
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>

      {/* Dessert Panel */}
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
    </div>
  );
});