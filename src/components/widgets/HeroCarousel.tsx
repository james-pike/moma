import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  return (
    <>
      <head>
        {/* Preload all carousel images */}
        <link rel="preload" href="/images/hero1.jpg" as="image" />
        <link rel="preload" href="/images/hero2.jpg" as="image" />
      </head>
      <Carousel pauseOnHover noControls>
        <Carousel.Slide>
          <img src="/images/hero1.jpg" alt="Hero 1" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img class="object-cover h-full w-full" src="/images/hero2.jpg" alt="Hero 2" />
        </Carousel.Slide>
      </Carousel>
    </>
  );
});