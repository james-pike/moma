import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
  subtitle?: string;
  highlight?: string;
  classes?: Record<string, string>;
  align?: "left" | "center" | "right"; // New prop for text alignment
}

export const CardHeadline = (props: Props) => {
  const { title = "", subtitle = "", highlight = "", classes = {}, align = "center" } = props;

  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-5xl ",
    subtitle: subtitleClass = "text-lg",
  } = classes;

  // Determine the text alignment class based on the `align` prop
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align] || "text-center"; // Default to "center" if not specified

  return (title || subtitle || highlight) ? (
      <div class={twMerge("mb-0 md:mx-auto md:mb-12", containerClass, alignmentClass)}>
      {highlight && (
        <p
          class="text-base text-primary-600 dark:text-primary-200 font-bold tracking-wide uppercase"
          dangerouslySetInnerHTML={highlight}
        />
      )}
      {title && (
        <h2
          class={twMerge("font-bold leading-tighter tracking-tighter font-heading text-heading", titleClass)}
          dangerouslySetInnerHTML={title}
        />
      )}

      {subtitle && <p class={twMerge("mt-2 md:mt-4 text-muted", subtitleClass)} dangerouslySetInnerHTML={subtitle} />}
    </div>
  ) : null;
};
