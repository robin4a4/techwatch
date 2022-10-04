<script lang="ts">
  import type { Category } from "@prisma/client";
  import { pillData } from "../consts";

  export let category: Category;
  export let noButton = false;
  export let isChecked = false;
  export let isEasterEgg = false;
</script>

<div
  class={`px-12 md:px-16 py-8 text-12 md:text-16 ${
    !noButton ? "cursor-pointer" : ""
  } font-bold rounded-full border border-gray-300 dark:border-gray-dark duration-200 peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-600 ${
    !isChecked && pillData.get(category.name)?.colorClasses
  } peer-checked:text-white
    ${isChecked ? pillData.get(category.name)?.colorCurrent + ' text-white' : ''}
  `}
>
  {isEasterEgg ? "vrai bon rap" : pillData.get(category.name)?.text}
</div>
