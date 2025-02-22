import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs'; // Your original import
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const menuItems = [
  { title: 'Espresso', description: 'Rich and bold espresso shot.', price: '$3.50', image: 'https://via.placeholder.com/300' },
  { title: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.50', image: 'https://via.placeholder.com/300' },
  { title: 'Latte', description: 'Smooth espresso with milk.', price: '$4.00', image: 'https://via.placeholder.com/300' },
  { title: 'Mocha', description: 'Chocolate and espresso delight.', price: '$4.75', image: 'https://via.placeholder.com/300' },
];

export default component$(() => {
  const selectedIndex = useSignal(0); // Start with Coffee tab (index 0)

  // Scroll to top when selectedIndex changes
  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  });

  return (
    <Tabs.Root class="max-w-screen-lg mx-auto" selectedIndex={selectedIndex.value} onSelectedIndexChange$={(index) => (selectedIndex.value = index)}>
      {/* Responsive Tabs List */}
      <Tabs.List class="grid grid-cols-4 sm:inline-flex sm:space-x-4 w-full bg-white p-2 rounded-lg shadow-md sticky top-[92px] z-10">
        <Tabs.Tab class="px-4 py-2">Coffee</Tabs.Tab>
        <Tabs.Tab class="px-4 py-2">Tea</Tabs.Tab>
        <Tabs.Tab class="px-4 py-2">Bistro</Tabs.Tab>
        <Tabs.Tab class="px-4 py-2">Dessert</Tabs.Tab>
      </Tabs.List>

      {/* Coffee Menu Panel */}
      <Tabs.Panel>
        <Card.Root>
          <Card.Content class="p-4">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {menuItems.map((item, index) => (
                <div key={index} class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                  <img src={item.image} alt={item.title} class="w-full h-40 object-cover" />
                  <div class="p-4">
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
  );
});