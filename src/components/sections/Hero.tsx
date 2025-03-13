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
    <>
    {/* <head>
    <link rel="preload" href="/images/hero1.webp" as="image"/>
    <link rel="preload" href="/images/hero2.webp" as="image"/>
    </head> */}
    <section class="relative px-0 border border-gray-200 dark:border-gray-700 max-w-7xl mx-auto !h-[25vh] md:!h-[50vh] lg:!h-[50vh] xl:!h-[35vh] text-white overflow-hidden rounded-none">
      <Carousel scrollable noControls slideInterval={5000} class="custom-carousel w-full !h-full rounded-none">
        <Carousel.Slide class="w-full !h-full flex relative rounded-none">
          <img
          width={1024}
          height={1024}
            class="flex-1 w-full !h-full object-cover rounded-none"
            src="/images/hero1.webp"
            alt="Freshly Brewed Coffee"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-none">
            <div class="text-center">
            <h1 class="text-[clamp(2.625rem,6vw,4.5rem)] md:text-[clamp(3rem,7vw,6rem)] font-bold mb-3 drop-shadow-lg leading-none">
  Digital Art & Restoration
</h1>
<p class="text-[clamp(1.57rem,3.1vw,2.06rem)] md:text-[clamp(1.75rem,3.5vw,2.5rem)] drop-shadow-md leading-tight">
  Specializing in Photography and Fine Art Printing
</p>



            </div>
          </div>
        </Carousel.Slide>

        <Carousel.Slide class="w-full !h-full flex relative rounded-none">
          <img
          width={1024}
          height={1024}
            class="flex-1 w-full !h-full object-cover rounded-none"
            src="/images/hero1.webp"
            alt="Freshly Brewed Coffee"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-none">
            <div class="text-center">
            <h1 class="text-[clamp(2.625rem,6vw,4.5rem)] md:text-[clamp(3rem,7vw,6rem)] font-bold mb-3 drop-shadow-lg leading-none">
  Digital Art & Restoration
</h1>
<p class="text-[clamp(1.57rem,3.1vw,2.06rem)] md:text-[clamp(1.75rem,3.5vw,2.5rem)] drop-shadow-md leading-tight">
  Specializing in Photography and Fine Art Printing
</p>



            </div>
          </div>
        </Carousel.Slide>
      
      </Carousel>


    </section>
    </>
  );
});