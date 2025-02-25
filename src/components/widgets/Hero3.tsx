import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  return (
    <section class="relative max-w-7xl mx-auto !h-[35vh] text-white overflow-hidden">
      <Carousel noControls slideInterval={4000} class="w-full !h-full">
        <Carousel.Slide class="w-full !h-full flex relative">
          <img 
            class="flex-1 w-full !h-full object-cover" 
            src="/images/hero1.webp" 
            alt="Freshly Brewed Coffee" 
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30">
            <div class="text-center">
              <h1 class="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                Freshly Brewed Perfection
              </h1>
              <p class="text-lg md:text-xl drop-shadow-md">
                Start your day with our artisanal coffee
              </p>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide class="w-full !h-full flex relative">
          <img 
            class="flex-1 w-full !h-full object-cover" 
            src="/images/hero2.webp" 
            alt="Cozy Cafe Ambience" 
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30">
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