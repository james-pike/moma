import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX } from "@qwikest/icons/lucide";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "@qwik-ui/utils";



export default component$(() => {

    const show = useSignal(false);

  return (
    <>
  <Modal.Root bind:show={show}>
  <Modal.Trigger>Open modal</Modal.Trigger>
  <Modal.Panel position={"right"}>
        <Modal.Title>Edit Profile</Modal.Title>
        <Modal.Description>
          Make changes to your profile here. Click save when you're done.
        </Modal.Description>
        <div class="mt-6">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input
            name="name"
            id="name"
            defaultValue="Pedro Duarte"
            class="col-span-3 w-[300px]"
          />
        </div>
        <footer class="mt-6">
          <Button look="primary" onClick$={() => (show.value = false)}>
            Save
          </Button>
        </footer>
        <Modal.Close
          class={cn(
            buttonVariants({ size: 'icon', look: 'link' }),
            'absolute right-3 top-2',
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


