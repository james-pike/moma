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
    <section class="relative max-w-7xl mx-auto !h-[35vh] md:!h-[50vh] lg:!h-[70vh] xl:!h-[80vh] text-white overflow-hidden rounded-none">
      <Carousel scrollable noControls slideInterval={5000} class="custom-carousel w-full !h-full rounded-none">
        <Carousel.Slide class="w-full !h-full flex relative rounded-none">
          <img
            class="flex-1 w-full !h-full object-cover rounded-none"
            src="/images/hero1.webp"
            alt="Freshly Brewed Coffee"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-none">
            <div class="text-center">
              <h1 class="text-4.5xl md:text-7xl font-bold mb-2 drop-shadow-lg leading-none">
                Digital Art & Restoration
              </h1>
              <p class="text-xl md:text-2xl drop-shadow-md leading-tight">
                Specializing in Photography and Fine Art Printing              </p>
            </div>
          </div>
        </Carousel.Slide>
      
      </Carousel>


    </section>
  );
});