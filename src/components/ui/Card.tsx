import { component$, type PropsOf, Slot } from '@builder.io/qwik';
import { cn } from '@qwik-ui/utils';

const Root = component$<PropsOf<'div'>>((props) => {
  return (
    <div
      {...props}
      class={cn(
        'rounded-base p-3 border border-white dark:border-gray-700 dark:bg-gray-800 bg-gray-100 text-card-foreground shadow-sm',
        props.class,
      )}
    >
      <Slot />
    </div>
  );
});

const Header = component$<PropsOf<'div'>>((props) => {
  return (
    <div {...props} class={cn('flex flex-col space-y-1.5 p-6', props.class)}>
      <Slot />
    </div>
  );
});

const Title = component$<PropsOf<'h3'>>((props) => {
  return (
    <h3 {...props} class={cn('font-medium leading-none tracking-tight', props.class)}>
      <Slot />
    </h3>
  );
});

const Description = component$<PropsOf<'p'>>((props) => {
  return (
    <p {...props} class={cn('text-sm text-muted-foreground', props.class)}>
      <Slot />
    </p>
  );
});

const Content = component$<PropsOf<'div'>>((props) => {
  return (
    <div {...props} class={cn('px-2 pt-2 pb-2', props.class)}>
      <Slot />
    </div>
  );
});

const Footer = component$<PropsOf<'div'>>(({ ...props }) => {
  return (
    <div {...props} class={cn('flex items-center p-6 pt-0', props.class)}>
      <Slot />
    </div>
  );
});

// Experimental API
const Image = component$<PropsOf<'img'>>(({ ...props }) => {
  return <img {...props} class={cn('w-full object-cover', props.class)} />;
});

export const Card = {
  Root,
  Header,
  Title,
  Description,
  Content,
  Footer,
  Image,
};
