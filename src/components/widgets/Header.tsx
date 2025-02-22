import { component$, useStore } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../icons/IconChevronDown";
import IconTwitter from "../icons/IconTwitter";
import IconTelegram from "../icons/IconTelegram";
import { Logo } from "../common/Logo";
import IconOrder from "../icons/IconOrder";
import MenuModal from "./MenuModal";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();

  return (
    <header
      id="header"
      class={`
        sticky top-0 z-40 
        bg-white dark:bg-gray-900 
        flex-none mx-auto w-full 
        border-b border-gray-200/50 
        transition-all duration-300 ease-in-out 
        ${store.isScrolling
          ? "md:bg-white/95 md:backdrop-blur-md dark:md:bg-gray-900/95 shadow-md"
          : "shadow-sm"
        }
      `}
      window:onScroll$={() => {
        store.isScrolling = window.scrollY >= 10;
      }}
    >
      {/* Top Bar */}
      <div
        class="
          w-full h-8 
          bg-gradient-to-r from-primary-600 to-primary-500 
          px-4 md:px-6 
          text-white 
          flex items-center justify-between 
          text-sm font-medium 
          shadow-sm
        "
      >
        <div class="flex items-center gap-2">
          <span class="hidden sm:inline">Today's Specials:</span>
          <span>Freshly brewed, just for you!</span>
        </div>
        <div class="hidden sm:flex items-center gap-4">
          <a
            href="tel:+16132188063"
            class="flex items-center gap-1.5 px-2.5 py-1 hover:bg-primary-700 rounded-md transition-colors duration-200"
          >
            <IconTelegram  />
            <span>(613) 218-8063</span>
          </a>
          <span class="text-primary-200">|</span>
          <a
            href="mailto:info@webdev.ca"
            class="flex items-center gap-1.5 px-2.5 py-1 hover:bg-primary-700 rounded-md transition-colors duration-200"
          >
            <IconTwitter  />
            <span>info@webdev.ca</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div
        class="
          relative 
          py-3 px-4 md:px-6 
          mx-auto w-full 
          max-w-7xl 
          flex items-center justify-between
        "
      >
        {/* Logo Section */}
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="/" class="flex items-center">
            <Logo class="h-10 w-auto" />
          </a>
          <div class="flex items-center gap-2 md:hidden">
            <a
              href="tel:+6132188063"
              class="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
              aria-label="Telegram"
              title="Telegram"
            >
              <IconTelegram  />
            </a>
            <a
              href="https://www.ubereats.com/ca/store/safi-fine-food/t1GquykYXD-4ZUT5tbSbrQ?srsltid=AfmBOorLqOjIs8pz1RRLuvd1EasP5ZUhIoN3RTgYmWhPDRmpzfTa5CG3"
              class="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
              aria-label="Order"
              title="Order"
            >
              <IconOrder  />
            </a>
            <ToggleMenu />
          </div>
        </div>

        {/* Navigation (Mobile Dropdown + Desktop) */}
        <nav
          class={`
            md:flex 
            md:items-center 
            md:text-gray-700 dark:md:text-gray-200 
            md:font-medium 
            md:text-base 
            md:gap-6 
            w-full 
            absolute md:static 
            left-0 
            top-full 
            bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-gray-900 
            md:bg-transparent dark:md:bg-transparent 
            shadow-xl md:shadow-none 
            border-b border-primary-200 dark:border-primary-800 
            transition-all duration-300 ease-in-out 
            hidden
          `}
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul
              class="
                flex flex-col md:flex-row 
                w-full md:w-auto 
                text-lg md:text-base 
                font-semibold 
                py-6 px-4 md:p-0
              "
            >
              {menu.items.map(({ text, href, items }, key) => (
                <li
                  key={key}
                  class={`
                    ${items?.length ? "relative group" : ""} 
                    border-b border-primary-100 dark:border-primary-800 
                    last:border-b-0 md:border-0
                  `}
                >
                  {items?.length ? (
                    <>
                      <button
                        class="
                          flex items-center justify-between w-full md:w-auto 
                          text-primary-700 dark:text-primary-200 
                          hover:text-primary-500 dark:hover:text-primary-400 
                          py-4 md:py-2 px-3 md:px-0 
                          transition-colors duration-200
                        "
                      >
                        {text}
                        <IconChevronDown
                          class="
                            w-6 h-6 md:w-4 md:h-4 
                            text-primary-500 dark:text-primary-300 
                            group-hover:rotate-180 md:ml-1 
                            transition-transform duration-200
                          "
                        />
                      </button>
                      <ul
                        class="
                          md:absolute md:left-0 md:mt-2 
                          bg-white/90 dark:bg-gray-800/90 
                          md:rounded-lg md:shadow-lg 
                          md:border md:border-primary-200 dark:md:border-primary-700 
                          w-full md:w-[200px] 
                          hidden md:group-hover:block 
                          pl-6 md:pl-0 
                          py-2 md:py-2 
                          backdrop-blur-sm
                        "
                      >
                        {items.map(({ text: text2, href: href2 }, key2) => (
                          <li key={key2}>
                            <a
                              href={href2}
                              class="
                                block 
                                py-3 px-4 
                                text-primary-600 dark:text-primary-200 
                                hover:bg-primary-200 dark:hover:bg-primary-800 
                                hover:text-primary-800 dark:hover:text-primary-100 
                                rounded-md 
                                transition-all duration-200
                              "
                            >
                              {text2}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={href}
                      class="
                        block 
                        text-primary-700 dark:text-primary-200 
                        hover:text-primary-500 dark:hover:text-primary-400 
                        py-4 md:py-2 px-3 md:px-0 
                        transition-colors duration-200
                      "
                    >
                      {text}
                    </a>
                  )}
                </li>
              ))}
              {/* Mobile-Only CTA */}
              <li class="md:hidden mt-6 px-3">
                <a
                  href="/contact"
                  class="
                    block 
                    bg-gradient-to-r from-primary-600 to-primary-700 
                    text-white 
                    py-4 px-6 
                    rounded-full 
                    font-semibold 
                    text-center 
                    shadow-lg 
                    hover:bg-primary-800 
                    transition-all duration-300
                  "
                >
                  Book A Consultation
                </a>
              </li>
            </ul>
          ) : null}
        </nav>

        {/* Desktop CTA */}
        <div class="hidden md:flex items-center gap-4">
          <a
            href="/contact"
            class="
              bg-primary-600 
              text-white 
              py-2 px-5 
              rounded-full 
              font-semibold 
              shadow-md 
              hover:bg-primary-700 
              hover:shadow-lg 
              transition-all duration-200
            "
          >
            Book A Consultation
          </a>
        </div>
      </div>
    </header>
  );
});