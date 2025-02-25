import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';


export default component$(() => {
  return (
    <section class="relative max-w-7xl mx-auto !h-[38vh] text-white overflow-hidden">
      <Carousel noControls slideInterval={4000} class="w-full !h-full">
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero1.webp" alt="Freshly Brewed Coffee" />
        </Carousel.Slide>
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero2.webp" alt="Cozy Cafe Ambience" />
        </Carousel.Slide>
      </Carousel>
  
    </section>
  );
});
