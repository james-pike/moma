import { component$, useStore } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  const store = useStore({
    isExpanded: false,
  });

  return (
    <button
      type="button"
      class={`
        ml-2 
        text-white 
        bg-gradient-to-r from-primary-500 to-primary-600 
        dark:text-gray-900 
        hover:from-primary-600 hover:to-primary-700 
        focus:outline-none 
        focus:ring-4 
        focus:ring-primary-300/50 
        dark:focus:ring-primary-700/50 
        rounded-full 
        p-3 
        inline-flex 
        items-center 
        justify-center 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        ease-in-out 
        ${store.isExpanded ? "rotate-90 scale-105" : ""}
      `}
      aria-label="Toggle Menu"
      onClick$={() => {
        store.isExpanded = !store.isExpanded; // Simplified toggle

        // TODO: Consider moving to a signal or CSS-based solution if possible
        document.body.classList.toggle("overflow-hidden");
        document.getElementById("header")?.classList.toggle("h-screen");
        document.querySelector("#header nav")?.classList.toggle("hidden");
      }}
    >
      <IconMenu
        class={`
          w-6 
          h-6 
          ${iconClass} 
          ${store.isExpanded ? "text-primary-100" : "text-white"}
          transition-colors 
          duration-200
        `}
      />
    </button>
  );
});