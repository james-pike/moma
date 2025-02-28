import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX, LuArrowLeft, LuChevronRight } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
import { Badge } from "../ui/Badge";
import IconHamburger from "../icons/IconHamburger";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const show = useSignal(false);
  const isServicesSection = useSignal(false);
  const location = useLocation();

  // Menu items array structure
  const menuItems = [
    { title: "Home", href: "/", badge: null },
    { title: "Our Story", href: "/about", badge: null },
    { 
      title: "Menu", 
      href: "/menu", 
      badge: <Badge class="absolute -top-0.1 left-14 bg-primary-300 text-white text-xs px-1 py-0 rounded">New</Badge> 
    },
    { 
      title: "Services", 
      href: "#",
      hasSubmenu: true,
      subitems: [
        { title: "Web Design", href: "/services/web-design" },
        { title: "Development", href: "/services/development" },
        { title: "SEO", href: "/services/seo" }
      ]
    },
    { title: "Reviews", href: "/reviews", badge: null },
    { title: "FAQ", href: "/faq", badge: null },
    { title: "Contact Us", href: "/contact", badge: null }
  ];

  // Get services subitems safely
  const servicesItem = menuItems.find(item => item.hasSubmenu);
  const servicesSubitems = servicesItem?.subitems ?? [];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center pl-4 pr-2 hover:bg-gray-100">
          <Modal.Trigger>
            <IconHamburger />
          </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"}>
          {/* Header */}
          <div class="border-b-2 border-gray-100 bg-primary-25 p-1">
            <Modal.Title>
              <a href="/">
                <Logo />
              </a>
            </Modal.Title>
            <Modal.Description class="text-md px-2">
              Join us for a taste of warmth and community.
            </Modal.Description>
          </div>

          {/* Navigation Content */}
          <nav class="mt-2 space-y-4 bg-primary-25">
            {isServicesSection.value ? (
              // Services Section
              <div class="flex flex-col h-full">
                <div class="flex items-center border-b border-gray-100 p-2">
                  <button
                    class="text-gray-700 hover:text-primary-600 p-2"
                    onClick$={() => (isServicesSection.value = false)}
                  >
                    <LuArrowLeft class="h-5 w-5" />
                  </button>
                  <h2 class="text-lg font-medium text-gray-800">Services</h2>
                </div>
                <ul class="flex flex-col gap-0 text-lg">
                  {servicesSubitems.map((subitem) => (
                    <li key={subitem.title}>
                      <a
                        href={subitem.href}
                        class={cn(
                          "block text-gray-700 hover:text-primary-600 p-2 px-3 hover:bg-primary-50 font-medium transition-all duration-200",
                          location.url.pathname === subitem.href && "bg-primary-50 text-primary-600"
                        )}
                        onClick$={() => (show.value = false)}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // Main Menu
              <div>
                <ul class="flex flex-col gap-0 text-lg">
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      {item.hasSubmenu ? (
                        <button
                          class={cn(
                            "block w-full text-left text-gray-700 hover:text-primary-600 p-2 px-3 hover:bg-primary-50 font-medium transition-all duration-200 flex items-center justify-between",
                            location.url.pathname.startsWith("/services/") && "bg-primary-50 text-primary-600"
                          )}
                          onClick$={() => (isServicesSection.value = true)}
                        >
                          <span>{item.title}</span>
                          <LuChevronRight class="h-5 w-5 text-gray-500 group-hover:text-primary-600" />
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          class={cn(
                            "block text-gray-700 hover:text-primary-600 p-2 px-3 hover:bg-primary-50 font-medium transition-all duration-200 relative",
                            location.url.pathname === item.href && "bg-primary-50 text-primary-600"
                          )}
                          onClick$={() => (show.value = false)}
                        >
                          {item.title}
                          {item.badge}
                        </a>
                      )}
                    </li>
                  ))}
                  <li class="p-3 ">
                    <Button
                      look="primary"
                      onClick$={() => {
                        alert("Logged out!");
                        show.value = false;
                      }}
                      class="w-full text-left bg-primary-400 text-white"
                    >
                      Order Online
                    </Button>
                  </li>
                </ul>
                <div class="h-2 bg-white"></div>
                <div class="bg-primary-25 h-40 w-full flex items-center justify-center text-center p-4">
                  <div>
                    <h2 class="text-2xl font-bold text-gray-800">Warm Up Your Day!</h2>
                    <p class="text-lg text-gray-600 mt-1">Enjoy 15% off all lattes this week.</p>
                    <p class="text-sm text-primary-600 font-medium mt-2">Use code: LATTELOVE</p>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Close Button */}
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-3 top-2 hover:bg-gray-100"
            )}
            type="submit"
          >
            <LuX class="h-5 w-5" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});