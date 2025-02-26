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
      <div class="flex items-center pl-3">
        <Modal.Trigger>
         
          <IconHamburger class=""/>
         

        </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"}> {/* Changed to "left" for sidebar feel */}
          <Modal.Title><Logo/></Modal.Title>
          <Modal.Description class="text-md">
            Join us for a taste of warmth and community.
          </Modal.Description>
          
          {/* Navigation Content */}
          <nav class="mt-6 space-y-4">
            <ul class="flex flex-col gap-4 text-lg">
              <li>
                <a
                  href="#home"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
             <div class="relative inline-block">
  Menu
  <Badge class="absolute -top-0.1 left-11 bg-primary-300 text-white text-xs px-1 py-0 rounded">
    New
  </Badge>
</div>
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
                  FAQ
                </a>
              </li>
              <li>
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