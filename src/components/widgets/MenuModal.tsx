import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX, LuArrowLeft, LuChevronRight } from "@qwikest/icons/lucide"; // Added LuArrowRight
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
import { Badge } from "../ui/Badge";
import IconHamburger from "../icons/IconHamburger";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const show = useSignal(false);
  const isServicesSection = useSignal(false);
  const location = useLocation();

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
          <div class="border-b-2 border-gray-100 bg-primary-25 pb-3">
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
                  <li>
                    <a
                      href="/services/web-design"
                      class={cn(
                        "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                        location.url.pathname === "/services/web-design/" && "bg-primary-50 text-primary-600"
                      )}
                      onClick$={() => (show.value = false)}
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/development"
                      class={cn(
                        "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                        location.url.pathname === "/services/development/" && "bg-primary-50 text-primary-600"
                      )}
                      onClick$={() => (show.value = false)}
                    >
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/seo"
                      class={cn(
                        "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                        location.url.pathname === "/services/seo/" && "bg-primary-50 text-primary-600"
                      )}
                      onClick$={() => (show.value = false)}
                    >
                      SEO
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              // Main Menu
              <ul class="flex flex-col gap-0 text-lg">
                <li>
                  <a
                    href="/"
                    class={cn(
                      "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                      location.url.pathname === "/" && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (show.value = false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    class={cn(
                      "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                      location.url.pathname === "/about/" && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (show.value = false)}
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    class={cn(
                      "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                      location.url.pathname === "/menu/" && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (show.value = false)}
                  >
                    <div class="relative inline-block">
                      Menu
                      <Badge class="absolute -top-0.1 left-12 bg-primary-300 text-white text-xs px-1 py-0 rounded">
                        New
                      </Badge>
                    </div>
                  </a>
                </li>
                <li>
                  <button
                    class={cn(
                      "block w-full text-left text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200 flex items-center justify-between",
                      location.url.pathname.startsWith("/services/") && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (isServicesSection.value = true)}
                  >
                    <span>Services</span>
                    <LuChevronRight class="h-5 w-5 text-gray-500 group-hover:text-primary-600" />
                  </button>
                </li>
                <li>
                  <a
                    href="/reviews"
                    class={cn(
                      "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                      location.url.pathname === "/reviews/" && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (show.value = false)}
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    class={cn(
                      "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                      location.url.pathname === "/faq/" && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (show.value = false)}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    class={cn(
                      "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                      location.url.pathname === "/contact/" && "bg-primary-50 text-primary-600"
                    )}
                    onClick$={() => (show.value = false)}
                  >
                    Contact Us
                  </a>
                </li>
                <li class="pt-2">
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
            )}
            {/* Footer Promo - Only show in main menu */}
            {!isServicesSection.value && (
              <div class="bg-primary-25 h-40 w-full flex items-center justify-center text-center p-4">
                <div>
                  <h2 class="text-2xl font-bold text-gray-800">Warm Up Your Day!</h2>
                  <p class="text-lg text-gray-600 mt-1">Enjoy 15% off all lattes this week at our cozy café.</p>
                  <p class="text-sm text-primary-600 font-medium mt-2">Use code: LATTELOVE</p>
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