import { component$ } from "@builder.io/qwik";
import HeroCarousel from "./HeroCarousel";


export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[36px] pointer-events-none"></div>
        <div class="py-5 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
          {/* <a href="https://kas.fyi/token/krc20/WIENER" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-primary-400 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Minting Now In Progress!</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a> */}
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading text-primary-400">
              <span class="text-primary-600">Website</span>  Design & Development <span class="text-primary-600">Services</span><br class="hidden lg:block" />{" "}
              {/* <span class="hidden lg:inline">create a website using </span>  */}
              {/* <span class="text-[#039de1]">Qwik</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind CSS</span> */}
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">

              Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites.

              </p>

              <div class=" sm:max-w-md m-auto grid grid-cols-1 border-radius-dot-25 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">
                  <a href="https://x.com/wienerKRC20">
                    <div class="flex w-full">

                      <button class="btn w-full bg-primary-400 dark:bg-primary-700 py-2 rounded-md ">
                        Book A Consultation
                      </button>

                    </div>
                  </a>
                  <a href="https://t.me/+Civ_RQYiZH03Y2I5">
                    <div class="flex w-full">

                      <button class="btn w-full bg-primary-300 dark:bg-primary-600 py-2 rounded-md ">
                        Request a Quote
                      </button>

                    </div>
                  </a>
             
           
                </div>
            </div>
          </div>
          <div class="basis-1/2">
            {/* <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            /> */}
            <HeroCarousel />
          </div>

        </div>

      </div>

    </section>
  );
});
