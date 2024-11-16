<script lang="ts">
  import Card from "$lib/components/Card/Card.svelte";
  import Modal from "$lib/components/Modal/Modal.svelte";
  import FormRenderer from "$lib/components/FormRenderer/FormRenderer.svelte";

  export let open: boolean = true;
</script>

<Modal {open}>
  <Card slot="content" class="card-dark">
    <h6 class="font-bold mb-xl">Add Word</h6>
    <FormRenderer fields={[{ label: "Word" }]} handleSubmit={() => {}} />
  </Card>
</Modal>
