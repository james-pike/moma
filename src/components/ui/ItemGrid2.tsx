import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
  delay?: number; // Optional delay in milliseconds
}

interface Props {
  items?: Array<Item>;
  defaultIcon?: any;
  classes?: Record<string, string>;
}

export const ItemGrid2 = (props: Props) => {
  const { items = [], defaultIcon: DefaultIcon = null, classes = {} } = props;

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary-500 dark:text-primary-700",
  } = classes as Record<string, string>;

  return (
    items.length && (
      <div
        class={twMerge(
          "grid motion-group mx-auto gap-6 sm:gap-8 opacity-0 intersect-once intersect:opacity-100",
          containerClass
        )}
      >
        {items.map(({ title, description, icon: Icon, classes: itemClasses = {}, delay }, index) => (
          <div key={`${title}${index}`}>
            <div
              class={twMerge(
                "flex flex-row max-w-md motion-preset-slide-up",
                panelClass,
                itemClasses.panel
              )}
              style={{ "--motion-delay": `${delay ?? index * 100}ms` }} // Match ServiceGrid's 150ms increment
            >
              <div class="flex justify-center">
                {(Icon || DefaultIcon) &&
                  (Icon ? (
                    <Icon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ) : (
                    <DefaultIcon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ))}
              </div>
              <div>
                <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses.title)}>{title}</h3>
                {description && (
                  <p
                    class={twMerge("text-gray-600 dark:text-slate-400 mt-3", descriptionClass, itemClasses.description)}
                    dangerouslySetInnerHTML={description}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};