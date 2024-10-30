<script>
  import InputField from "$lib/components/InputField/InputField.svelte";
  import Dropdown from "$lib/components/Dropdown/Dropdown.svelte";
  import Checkbox from "$lib/components/Checkbox/Checkbox.svelte";
  import StudySetWordCard from "../../../../../../components/rogakkou/StudySetWordCard.svelte";

  const word = {
    kanji: "kotoba",
  };
</script>

<div class="p-4">
  <div class="relative mb-4">
    <InputField placeholder="Add word" />
    <Dropdown>
      <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>{word.kanji}</Checkbox>
      </li>
    </Dropdown>
  </div>
  <div class="flex flex-col gap-y-4">
    <StudySetWordCard {word} />
  </div>
</div>
