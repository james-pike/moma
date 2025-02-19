import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  return (
    <section class="relative w-full h-[90vh] flex items-center -mt-20 justify-center text-white">
      <Carousel noControls class="w-full h-full">
        <Carousel.Slide class="h-full">
          <img class="w-full h-full object-cover" src="/images/hero1.webp" alt="Freshly Brewed Coffee" />
        </Carousel.Slide>
        <Carousel.Slide class="h-full">
          <img class="w-full h-full object-cover" src="/images/hero2.jpg" alt="Cozy Cafe Ambience" />
        </Carousel.Slide>
      
      </Carousel>
      <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 text-center p-4">
        <h1 class="text-5xl md:text-7xl font-bold">Welcome to Aroma Cafe</h1>
        <p class="text-xl md:text-2xl mt-4">Your Perfect Cup, Every Time</p>
        <div class="mt-6 flex space-x-4">
          <a href="/menu" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg">View Menu</a>
          <a href="/visit" class="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg text-lg">Visit Us</a>
        </div>
      </div>
    </section>
  );
});
