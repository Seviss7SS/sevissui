<script lang="ts">
  import { Dialog } from "bits-ui";
  import cx from "classnames";

  export let open: boolean = false;
  export let centered: boolean = true;
  export let contentClass: string = "";

  $: _contentClass = cx("fixed z-50 outline-none", {
    "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]": centered,
    [contentClass]: contentClass,
  });
</script>

<Dialog.Root bind:open>
  <Dialog.Overlay class="fixed w-screen h-screen bg-black bg-opacity-50 z-50" />
  <Dialog.Content class={_contentClass}>
    <Dialog.Description><slot name="content"></slot></Dialog.Description>
  </Dialog.Content>
</Dialog.Root>
