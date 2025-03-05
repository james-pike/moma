import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
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
  const location = useLocation(); // Get the current locations
  const isIndexPage = location.url.pathname === "/";


  return (
    <div
      class={twMerge(
        "relative mx-auto max-w-7xl px-5 md:px-6 text-default", 
        isIndexPage ? "py-10 md:py-16 lg:py-20" : "py-9 md:py-14 lg:py-16", 
        classes?.container,
        isDark ? "dark" : ""
      )}
      {...(id ? { id } : {})}
    >
      <Slot />
    </div>
  );
});