<script lang="ts">
  export let value: string = "";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let placeholder: string = "";
  export let rows: number | string | undefined = undefined;
</script>

<textarea
  {value}
  {id}
  {name}
  {placeholder}
  rows={typeof rows === "string" ? parseInt(rows) : rows}
/>
