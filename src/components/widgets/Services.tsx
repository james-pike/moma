import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";

const services = [
    {
      title: "Exhibit Photography",
      description: "Professional photography services tailored for exhibitions and galleries.",
      details: "Showcase your artwork or exhibits with high-quality, detailed photography.",
      image: "/images/exhibit.jpg",
      alt: "Exhibit Photography",
    },
    {
      title: "Reproduction Services",
      description: "Accurate reproductions for prints, publications, and digital archives.",
      details: "Ensure every detail is captured for stunnning, true-to-life reproductions.",
      image: "/images/reproduction.jpg",
      alt: "Reproduction Services",
    },
    {
      title: "Fine Art Photography",
      description: "Capture the essence of fine art with our specialized photography services.",
      details: "Highlight textures, colors, and emotions in your artwork.",
      image: "/images/fineart.jpg",
      alt: "Fine Art Photography",
    },
    {
      title: "Digitization Services",
      description: "Preserve and digitize your valuable artwork or photographs.",
      details: "Convert physical assets into high-quality digital formats.",
      image: "/images/digitization.jpg",
      alt: "Digitization Services",
    },
    {
      title: "Mobile Photography",
      description: "Professional photography using mobile devices for quick turnarounds.",
      details: "Creative and fast solutions for on-the-go photography needs.",
      image: "/images/iphone.jpg",
      alt: "Mobile Photography",
    },
    {
      title: "Event Photography",
      description: "Capture unforgettable moments with our event photography expertise.",
      details: "Ensure every memory is preserved with beautiful, candid shots.",
      image: "/images/photography.jpg",
      alt: "Event Photography",
    },
  ];

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;

  return (
    <section class="relative bg-gray-50 scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <div class="grid mx-auto max-w-screen-xl mt-8 mb-8 md:mb-16 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, description, details, image, alt }, index) => (
        <div key={index} class="group relative overflow-hidden rounded-lg shadow-md">
          <img
            width={700}
            height={400}
            src={image}
            alt={alt}
            class="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <p class="text-white text-center px-4">{details}</p>
          </div> */}
          <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>

     
  );
});
