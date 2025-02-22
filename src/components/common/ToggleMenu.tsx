import { component$, type QRL } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
  isExpanded: boolean;
  onToggle$: QRL<() => void>;
}

export default component$((props: ItemProps) => {
  const { iconClass, isExpanded, onToggle$ } = props;

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
        ${isExpanded ? "rotate-90 scale-105" : ""}
      `}
      aria-label="Toggle Menu"
      onClick$={onToggle$}
    >
      <IconMenu
        class={`
          w-6 
          h-6 
          ${iconClass} 
          ${isExpanded ? "text-primary-100" : "text-white"}
          transition-colors duration-200
        `}
      />
    </button>
  );
});