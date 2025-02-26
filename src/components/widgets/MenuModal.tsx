import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
import { Badge } from "../ui/Badge";
import IconHamburger from "../icons/IconHamburger";

export default component$(() => {
  const show = useSignal(false);

  return (
    <>
      <Modal.Root bind:show={show}>
        {/* Trigger with a subtle hover effect */}
        <div class="flex items-center pl-3 pr-1">
          <Modal.Trigger class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <IconHamburger/>
          </Modal.Trigger>
        </div>

        {/* Sidebar Panel with a sleek slide-in feel */}
        <Modal.Panel
          position={"left"}
          class="w-72 bg-white shadow-xl border-r border-gray-200 transform transition-all duration-300 ease-in-out"
        >
          {/* Header with Logo and a modern vibe */}
          <div class="flex items-center justify-between p-4 border-b border-gray-100">
            <Modal.Title>
              <Logo class="w-24 h-auto" />
            </Modal.Title>
            <Modal.Close
              class={cn(
                buttonVariants({ size: "icon", look: "ghost" }),
                "text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full p-1 transition-colors duration-150"
              )}
              type="submit"
            >
              <LuX class="h-5 w-5" />
            </Modal.Close>
          </div>

          {/* Description with a warm tone */}
          <Modal.Description class="px-4 pt-3 text-sm text-gray-600 italic">
            Join us for a taste of warmth and community.
          </Modal.Description>

          {/* Navigation with enhanced styling */}
          <nav class="mt-6 px-4 space-y-2">
            <ul class="flex flex-col gap-3 text-base">
              <li>
                <a
                  href="/about"
                  class="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-all duration-200"
                  onClick$={() => (show.value = false)}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  class="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-all duration-200"
                  onClick$={() => (show.value = false)}
                >
                  <div class="relative inline-block">
                    Menu
                    <Badge class="absolute -top-1 left-12 bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
                      New
                    </Badge>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  class="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-all duration-200"
                  onClick$={() => (show.value = false)}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  class="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-all duration-200"
                  onClick$={() => (show.value = false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-all duration-200"
                  onClick$={() => (show.value = false)}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Button
                  look="primary"
                  onClick$={() => {
                    alert("Logged out!");
                    show.value = false;
                  }}
                  class="w-full mt-2 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
                >
                  Order Online
                </Button>
              </li>
            </ul>
          </nav>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});