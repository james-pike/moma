import { component$, useStyles$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  useStyles$(`
    .custom-carousel,
    .custom-carousel img,
    .custom-carousel > div {
      border-radius: 0 !important;
    }
  `);

  return (
<section class="relative max-w-7xl mx-auto !h-[35vh] md:!h-[50vh] text-white overflow-hidden rounded-none">
  <Carousel scrollable noControls slideInterval={5000} class="custom-carousel w-full !h-full rounded-none">
    <Carousel.Slide class="w-full !h-full flex relative rounded-none">
      <img
        class="flex-1 w-full !h-full object-cover rounded-none"
        src="/images/hero1.webp"
        alt="Freshly Brewed Coffee"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-none">
        <div class="text-center">
        <h1 class="text-[clamp(3rem,6vw,4.5rem)] md:text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold mb-2 drop-shadow-lg leading-none">
  Digital Art & Restoration
</h1>
<p class="text-[clamp(1.25rem,3vw,2rem)] md:text-[clamp(1.4rem,3.2vw,2.25rem)] drop-shadow-md leading-tight">
  Specializing in Photography and Fine Art Printing
</p>

        </div>
      </div>
    </Carousel.Slide>
  </Carousel>
</section>

  );
});