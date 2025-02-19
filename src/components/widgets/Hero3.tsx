import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  return (
    <section class="relative w-full !h-[70vh] text-white overflow-hidden">
      <Carousel noControls slideInterval={4000} class="w-full !h-full">
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero1.webp" alt="Freshly Brewed Coffee" />
        </Carousel.Slide>
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero2.webp" alt="Cozy Cafe Ambience" />
        </Carousel.Slide>
      </Carousel>
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center p-4">
        <h1 class="text-5xl motion-preset-focus md:text-7xl mb-4 font-bold font-heading">Welcome to Aroma Cafe</h1>
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <p class="text-2xl text-muted mb-6 dark:text-slate-300 motion-preset-focus motion-delay-100 ">

            Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites.              </p>
            <div class="w-full flex justify-center">
  <div class="flex motion-preset-focus motion-delay-200 flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full sm:max-w-md lg:max-w-7xl px-4">
    <a href="#menu" class="w-full sm:w-auto">
      <button class="btn w-full max-w-[400px] text-white bg-primary-700 hover:bg-primary-400 dark:bg-primary-700 py-2 rounded-md">
        Explore Menu
      </button>
    </a>
    <a href="https://www.ubereats.com/ca/store/safi-fine-food/t1GquykYXD-4ZUT5tbSbrQ?srsltid=AfmBOorLqOjIs8pz1RRLuvd1EasP5ZUhIoN3RTgYmWhPDRmpzfTa5CG3" class="w-full sm:w-auto">
      <button class="btn w-full max-w-[400px] bg-primary-300 text-white hover:bg-primary-500 dark:bg-primary-600 py-2 rounded-md">
        Order Online
      </button>
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
});
