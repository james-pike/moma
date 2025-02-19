import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  return (
    <section class="relative w-full !h-[70vh] text-white overflow-hidden">
      <Carousel noControls class="w-full !h-full">
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero1.webp" alt="Freshly Brewed Coffee" />
        </Carousel.Slide>
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero2.webp" alt="Cozy Cafe Ambience" />
        </Carousel.Slide>
      </Carousel>
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center p-4">
        <h1 class="text-5xl md:text-7xl mb-4 font-bold font-heading">Welcome to Aroma Cafe</h1>
        <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">

                Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites.              </p>

              <div class=" sm:max-w-md m-auto grid grid-cols-1 border-radius-dot-25 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">
                <a href="#">
                  <div class="flex w-full">

                    <button class="btn w-full motion-preset-slide-right  bg-primary-200 hover:bg-primary-300 dark:bg-primary-700 py-2 rounded-md ">
                      Explore Menu
                    </button>

                  </div>
                </a>
                <a href="/contact">
                  <div class="flex w-full">

                    <button class="btn w-full bg-primary-100 hover:bg-primary-200 dark:bg-primary-600 py-2 rounded-md ">
Order Online                    </button>

                  </div>
                </a>


              </div>
            </div>
      </div>
    </section>
  );
});
