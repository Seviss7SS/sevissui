<script lang="ts">
  import { DropdownMenu } from "bits-ui";

  export let label: string = "";
  export let href: string = "";
</script>

<DropdownMenu.Item>
  <a {href}>
    {label}
  </a>
</DropdownMenu.Item>
