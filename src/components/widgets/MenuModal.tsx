import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
import { Badge } from "../ui/Badge";
import IconHamburger from "../icons/IconHamburger";
import { useLocation } from "@builder.io/qwik-city"; // Import for routing

export default component$(() => {
  const show = useSignal(false);
  const location = useLocation(); // Get current route info

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center pl-4 pr-2 hover:bg-gray-100">
          <Modal.Trigger>
            <IconHamburger />
          </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"}>
          <div class="border-b-2 border-gray-100 pb-3">
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
          <nav class="mt-4 space-y-4">
            <ul class="flex flex-col gap-0 text-lg">
            <li>
                <a
                  href="/"
                  class={cn(
                    "block text-gray-700 hover:text-primary-600 p-2 hover:bg-primary-50 font-medium transition-all duration-200",
                    location.url.pathname === "/" && "bg-primary-50 text-primary-600" // Active route styling
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
                    location.url.pathname === "/about/" && "bg-primary-50 text-primary-600" // Active route styling
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
          </nav>

          {/* Close Button */}
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-3 top-2"
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