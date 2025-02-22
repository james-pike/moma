import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { LuX } from "@qwikest/icons/lucide";



export default component$(() => {

    const show = useSignal(false);

  return (
    <>
  <Modal.Root bind:show={show}>
  <Modal.Trigger>Open modal</Modal.Trigger>
  <Modal.Panel position={"right"} >
    <Modal.Title>Title</Modal.Title>
    <Modal.Description>Description</Modal.Description>
    <div>...</div>
    <footer>
      <Button look="primary" onClick$={() => (show.value = false)}>
        Save
      </Button>
    </footer>
    <Modal.Close>
      <LuX class="h-5 w-5" />
    </Modal.Close>
  </Modal.Panel>
</Modal.Root>

    </>
  );
});


