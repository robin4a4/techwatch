<script lang="ts">
  import type { Category } from "@prisma/client";
  import { pillData } from "../consts";

  export let category: Category;
  export let noButton: boolean = false;
</script>

<div
  class={`px-16 py-8 ${
    !noButton ? "cursor-pointer" : ""
  } font-bold rounded-full border border-gray-300 dark:border-gray-dark duration-200 peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-600 ${
    pillData.get(category.name)?.colorClasses
  } peer-checked:text-white`}
>
  {pillData.get(category.name)?.text}
</div>
