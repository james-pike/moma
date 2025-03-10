import { component$ } from '@builder.io/qwik';
import { Popover } from '../ui/Popover';
import { buttonVariants } from '../ui/Button';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import IconBrandTailwind from '../icons/IconBrandTailwind';


export default component$(() => {
  return (
    <Popover.Root flip={false} gutter={8}>
      <Popover.Trigger class={buttonVariants({ look: 'outline' })}>
        <IconBrandTailwind/>
      </Popover.Trigger>
      <Popover.Panel>
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Dimensions</h4>
            <p class="text-sm text-muted-foreground">Set the dimgensions for the layer.</p>
          </div>
          <div class="grid gap-2">
            <div class="grid grid-cols-5 items-center gap-4">
              <Label class="col-span-2" for="width">
                Width
              </Label>
              <Input name="width" value="100%" class="col-span-3 h-8" />
            </div>
            <div class="grid grid-cols-5 items-center gap-4">
              <Label class="col-span-2" for="maxWidth">
                Max. width
              </Label>
              <Input name="maxWidth" value="300px" class="col-span-3 h-8" />
            </div>
            <div class="grid grid-cols-5 items-center gap-4">
              <Label class="col-span-2" for="height">
                Height
              </Label>
              <Input name="height" value="25px" class="col-span-3 h-8" />
            </div>
            <div class="grid grid-cols-5 items-center gap-4">
              <Label class="col-span-2" for="maxHeight">
                Max. height
              </Label>
              <Input name="maxHeight" value="none" class="col-span-3 h-8" />
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover.Root>
  );
});
