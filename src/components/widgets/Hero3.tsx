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
    <section class="relative max-w-7xl mx-auto !h-[35vh] text-white overflow-hidden rounded-none">
      <Carousel scrollable noControls slideInterval={5000} class="custom-carousel w-full !h-full rounded-none">
        <Carousel.Slide class="w-full !h-full flex relative rounded-none">
          <img 
            class="flex-1 w-full !h-full object-cover rounded-none" 
            src="/images/hero1.webp" 
            alt="Freshly Brewed Coffee" 
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-none">
            <div class="text-center">
              <h1 class="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                Digital Art & Restoration
              </h1>
              <p class="text-xl md:text-2xl drop-shadow-md">
Specializing in Photography and Fine Art Printing              </p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide class="w-full !h-full flex relative rounded-none">
          <img 
            class="flex-1 w-full !h-full object-cover rounded-none" 
            src="/images/hero2.webp" 
            alt="Cozy Cafe Ambience" 
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-none">
            <div class="text-center">
              <h1 class="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                Your Cozy Escape
              </h1>
              <p class="text-lg md:text-xl drop-shadow-md">
                Relax in our warm, inviting atmosphere
              </p>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>


    </section>
  );
});