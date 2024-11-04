<script>
  import Card from "$lib/components/Card/Card.svelte";
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Button from "$lib/components/Button/Button.svelte";
</script>

<div
  class="h-screen w-screen bg-gray-800 flex pt-[20vh] justify-center items-center"
>
  <Card theme="dark" class="w-96">
    <form
      class="flex flex-col gap-y-md"
      on:submit={() => (window.location.href = "/rogakkou/")}
    >
      <h1 class="text-2xl font-bold">Login</h1>
      <div>
        <InputField theme="dark" label="Username" name="username" />
      </div>
      <div>
        <InputField
          theme="dark"
          inputType="password"
          label="Password"
          name="password"
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  </Card>
</div>
