import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";

export default component$(() => {
  const show = useSignal(false);

  return (
    <>
      <Modal.Root bind:show={show}>
        <Modal.Trigger>Open Navigation</Modal.Trigger>
        <Modal.Panel position={"left"}> {/* Changed to "left" for sidebar feel */}
          <Modal.Title><Logo/></Modal.Title>
          <Modal.Description>
            Explore your options below.
          </Modal.Description>
          
          {/* Navigation Content */}
          <nav class="mt-6 space-y-4">
            <ul class="flex flex-col gap-4">
              <li>
                <a
                  href="#home"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  class="block text-gray-700 hover:text-blue-600 font-medium"
                  onClick$={() => (show.value = false)}
                >
                  Settings
                </a>
              </li>
              <li>
                <Button
                  look="primary"
                  onClick$={() => {
                    alert("Logged out!");
                    show.value = false;
                  }}
                  class="w-full text-left"
                >
                  Logout
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