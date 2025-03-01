import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface PageWrapperProps {
  id?: string;
  isDark?: boolean;
  classes?: {
    container?: string;
  };
}

export const PageWrapper = component$((props: PageWrapperProps) => {
  const { id, isDark = false, classes = {} } = props;

  return (
    <div
      class={twMerge(
        "relative mx-auto max-w-7xl px-5 md:px-6 py-10 md:py-16 lg:py-20 text-default",
        classes?.container,
        isDark ? "dark" : ""
      )}
      {...(id ? { id } : {})}
    >
      <Slot />
    </div>
  );
});