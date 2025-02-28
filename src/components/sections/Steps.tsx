import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import IconStar from "~/components/icons/IconStar";
import { Headline } from "../ui/Headline";

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
  const {  title = "", subtitle = "", highlight = "", classes = {} } = props;
  const stepsData = {
    title: "Our Process: From Idea to Finished Print",
    items: [
      {
        title: "Step 1: Request a Quote",
        description:
          "Start by requesting a personalized quote for your printing needs. Share your project details, and we'll provide you with a clear and competitive estimate.",
        icon: IconStar,
      },
      {
        title: "Step 2: Custom Design Assistance",
        description:
          "Our expert design team can help you refine your artwork or create a custom design that meets your vision. We ensure your project is print-ready and perfect for production.",
        icon: IconStar,
      },
      {
        title: "Step 3: High-Quality Printing",
        description:
          "Once approved, we bring your project to life using state-of-the-art printing technology. We guarantee vibrant colors, sharp details, and exceptional quality in every print.",
        icon: IconStar,
      },
      {
        title: "Step 4: Quality Check & Delivery",
        description:
          "Before your order leaves our shop, we conduct a thorough quality check to ensure perfection. Then, we pack and deliver your prints right to your doorstep, on time and in perfect condition.",
        icon: IconStar,
      },
    ],
    image: {
      src: "/images/hero1.webp",
      alt: "Steps to professional printing success",
    },
  };

  const { items, image } = stepsData;

  return (
    
    <section class="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-gray-100 dark:bg-gray-800">
      <div class="grid gap-4 sm:gap-6 md:grid-cols-[1fr_1fr] md:gap-x-8 lg:gap-x-10">
        {/* Left Column: Headline on mobile, Headline + Image on desktop */}
        <div class="md:col-start-1 order-1 flex flex-col md:gap-y-0">
          <div>
            <Headline 
              title={title} 
              subtitle={subtitle} 
              highlight={highlight} 
              classes={classes?.headline} 
              align="left" 
            />
          </div>
          {typeof image !== "undefined" && (
            <div class="hidden md:block">
              <Image
                layout="constrained"
                src="/images/hero1.webp"
                width={532}
                height={504}
                alt={image.alt}
                class="w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:h-auto"
                breakpoints={[320, 480, 640, 768, 1024]}
              />
            </div>
          )}
        </div>

        {/* Steps */}
        <div class="motion-group md:col-start-2 md:row-start-1 order-2">
          {items.map(({ title, description, icon: Icon }, index) => (
            <div
              key={`item-steps-${index}`}
              class={`flex opacity-0 intersect-once intersect:opacity-100 intersect:motion-preset-slide-up motion-delay-[${index * 150}ms]`}
            >
              <div class="mr-4 flex flex-col items-center">
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                  {Icon ? (
                    <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                  ) : (
                    <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                  )}
                </div>
                {index !== items.length - 1 && (
                  <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                )}
              </div>
              <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                {title && (
                  <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                    {title}
                  </p>
                )}
                {description && (
                  <p class="text-gray-600 dark:text-slate-400">{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image (mobile only) */}
        {typeof image !== "undefined" && (
          <div class="md:hidden order-3">
            <Image
              layout="constrained"
              src="/images/steps.webp"
              width={532}
              height={504}
              alt={image.alt}
              class="w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 sm:h-[400px]"
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        )}
      </div>
    </section>
  );
});