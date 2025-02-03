import { component$, useStore } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../icons/IconChevronDown";
import IconTwitter from "../icons/IconTwitter";
import IconTelegram from "../icons/IconTelegram";
import { Logo } from "../common/Logo";
import ToggleTheme from "../common/ToggleTheme";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 bg-gradient-to-r from-primary-100 to-primary-50 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
        store.isScrolling
          ? " md:bg-primary-50/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-primary-50 dark:bg-slate-900"
          : "bg-primary-50"
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0"></div>
      <div class="relative text-default py-2.5 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href={"/"}>
           <Logo/>
           {/* <img width={150} height={100} src="/images/logo.png"></img> */}
          </a>
          <div class="flex items-center md:hidden">
           
            {/* <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" /> */}
        <ToggleTheme/>
          <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href="mailto:info@webdev.ca"
                      >
                        <IconTwitter />
                      </a>
                      <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                       href="tel:+613 282 6217"
                      >
                        <IconTelegram />
                      </a>
            <ToggleMenu />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5"
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
              {menu.items.map(({ text, href, items }, key) => (
                <li key={key} class={items?.length ? "dropdown" : ""}>
                  {items?.length ? (
                    <>
                      <button class="hover:text-primary hover:underline dark:hover:text-white px-4 py-3 flex items-center">
                        {text} <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                      </button>
                      <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                        {items.map(({ text: text2, href: href2 }, key2) => (
                          <li key={key2}>
                            <a
                              class="first:rounded-t last:rounded-b md:hover:bg-primary-50 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                              href={href2}
                            >
                              {text2}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a class="hover:text-primary hover:underline dark:hover:text-white px-4 py-3 flex items-centers" href={href}>
                      {text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <div class="flex">
              <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
              {/* <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"https://x.com/wienerKRC20"}
                      >
                        <IconTwitter />
                      </a> */}
              <a
                        class=" dark:text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-md p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"https://t.me/+Civ_RQYiZH03Y2I5"}
                      >
                        <IconTelegram /> <div class="w-1"></div>613 282-6217
                      </a>
            </div>
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
              <a
                href="/contact"
                class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
              >
                Book A Consultation
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});
