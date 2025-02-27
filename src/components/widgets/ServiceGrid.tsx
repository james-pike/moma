import { component$ } from "@builder.io/qwik";

const services = [
  {
    title: "Exhibit Photography",
    description: "Professional photography services tailored for exhibitions and galleries.",
    details: "Showcase your artwork or exhibits with high-quality, detailed photography.",
    image: "/images/exhibit.jpg",
    alt: "Exhibit Photography",
    delay: 0, // Delay in milliseconds
  },
  {
    title: "Reproduction Services",
    description: "Accurate reproductions for prints, publications, and digital archives.",
    details: "Ensure every detail is captured for stunning, true-to-life reproductions.",
    image: "/images/reproduction.jpg",
    alt: "Reproduction Services",
    delay: 100,
  },
  {
    title: "Fine Art Photography",
    description: "Capture the essence of fine art with our specialized photography services.",
    details: "Highlight textures, colors, and emotions in your artwork.",
    image: "/images/fineart.jpg",
    alt: "Fine Art Photography",
    delay: 200,
  },
  {
    title: "Digitization Services",
    description: "Preserve and digitize your valuable artwork or photographs.",
    details: "Convert physical assets into high-quality digital formats.",
    image: "/images/digitization.jpg",
    alt: "Digitization Services",
    delay: 300,
  },
  {
    title: "Mobile Photography",
    description: "Professional photography using mobile devices for quick turnarounds.",
    details: "Creative and fast solutions for on-the-go photography needs.",
    image: "/images/iphone.jpg",
    alt: "Mobile Photography",
    delay: 400,
  },
  {
    title: "Event Photography",
    description: "Capture unforgettable moments with our event photography expertise.",
    details: "Ensure every memory is preserved with beautiful, candid shots.",
    image: "/images/photography.jpg",
    alt: "Event Photography",
    delay: 500,
  },
];

export default component$(() => {
  return (
    <div class="grid mx-auto max-w-screen-xl mt-8 mb-8 md:mb-16 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 motion-group opacity-0 intersect-once intersect:opacity-100">
      {services.map(({ title, description, details, image, alt, delay }, index) => (
        <div
          key={index}
          class={`group relative overflow-hidden rounded-lg shadow-md motion-preset-slide-up`}
          style={{ "--motion-delay": `${delay}ms` }} // Custom property for the library
        >
          <img
            width={700}
            height={300}
            src={image}
            alt={alt}
            class="w-full h-45 object-cover transition-transform bg-primary-50 duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <p class="text-white text-center px-4">{details}</p>
          </div>
          <div class="px-4 py-3 bg-gray-100 dark:bg-gray-800">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
});