import { twMerge } from "tailwind-merge";
import { component$ } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  classes?: Record<string, string>;
}

export const ItemGrid2 = component$((props: Props) => {
  const { items = [], classes = {} } = props;

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: iconClass = "text-secondary-500 dark:text-secondary-700",
  } = classes as Record<string, string>;

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".animate-observer").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-observer").forEach((element) => {
        observer.unobserve(element);
      });
    };
  });

  return (
    items.length && (
      <div
        class={twMerge("grid p-2 md:p-4 rounded-xl bg-white mx-auto gap-8 animate-observer", containerClass)}
        data-animate="stagger"
      >
        {items.map(
          (
            { title, description, icon: Icon, classes: itemClasses = {} },
            index
          ) => (
            <div
              key={`${title}${index}`}
              class="opacity-0 transition-all duration-500 ease-in-out"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                class={twMerge(
                  "flex flex-row max-w-md",
                  panelClass,
                  itemClasses.panel
                )}
              >
                <div class="flex justify-center">
                  {Icon && (
                    <Icon
                      class={twMerge(
                        "w-7 h-7 mr-2",
                        iconClass,
                        itemClasses.icon
                      )}
                    />
                  )}
                </div>
                <div>
                  <h3
                    class={twMerge(
                      "text-xl font-bold",
                      titleClass,
                      itemClasses.title
                    )}
                  >
                    {title}
                  </h3>
                  {description && (
                    <p
                      class={twMerge(
                        "text-gray-600 dark:text-slate-400 mt-3",
                        descriptionClass,
                        itemClasses.description
                      )}
                      dangerouslySetInnerHTML={description}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    )
  );
});