import { component$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const menuItems = [
  { title: 'Espresso', description: 'Rich and bold espresso shot.', price: '$3.50', image: 'https://via.placeholder.com/300' },
  { title: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.50', image: 'https://via.placeholder.com/300' },
  { title: 'Latte', description: 'Smooth espresso with milk.', price: '$4.00', image: 'https://via.placeholder.com/300' },
  { title: 'Mocha', description: 'Chocolate and espresso delight.', price: '$4.75', image: 'https://via.placeholder.com/300' }
];


export default component$(() => {
  return (
    <Tabs.Root class="max-w-[400px]">
      
      <Tabs.List class="grid w-full grid-cols-4 sticky top-0 bg-white z-10 shadow-md">
        <Tabs.Tab>Coffee</Tabs.Tab>
        <Tabs.Tab>Tea</Tabs.Tab>
        <Tabs.Tab>Bistro</Tabs.Tab>
        <Tabs.Tab>Dessert</Tabs.Tab>
        
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root>
         
          <Card.Content class="space-y-2">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
  {menuItems.map((item, index) => (
    <div key={index} class="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs border border-gray-200 mx-auto">
      <img src={item.image} alt={item.title} class="w-full h-40 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p class="text-sm text-gray-600 mt-2">{item.description}</p>
        <p class="text-lg font-bold text-primary mt-3">{item.price}</p>
      </div>
    </div>
  ))}
</div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
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
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
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
