<script>
  import Card from "$lib/components/Card/Card.svelte";
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Modal from "$lib/components/Modal/Modal.svelte";
  import Button from "$lib/components/Button/Button.svelte";
</script>

<Modal open>
  <Card slot="content" class="card-dark">
    <h6 class="font-bold mb-xl">Add Word</h6>
    <form class="gap-y-lg flex flex-col">
      <InputField label="Word" radius="rounded-md" />
      <Button class="w-full">Add word</Button>
    </form>
  </Card>
</Modal>
