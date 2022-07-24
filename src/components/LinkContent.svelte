<script lang="ts">
  import type { LinkWithCategory } from "../types";
  import Pill from "./Pill.svelte";

  export let link: LinkWithCategory;
</script>

<div
  class="flex flex-col w-full border border-gray-300 dark:border-gray-dark duration-200 rounded-md"
>
  <div class="flex items-center justify-between w-full p-16">
    <div class="flex items-center gap-8 font-bold max-w-[70%]">
      <a href={link.link} class="flex items-center max-w-[100%]">
        <span class="text-gray-300 dark:text-gray-600 duration-200"
          >https://</span
        >
        <span class="text-blue-600 truncate block">
          {link.link.replace(/https:\/\/|http:\/\//gi, "")}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 min-w-[20px] text-gray-300 dark:text-gray-600 duration-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
          />
          <path
            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
          />
        </svg>
      </a>
    </div>
    <Pill category={link.category} />
  </div>
  {#if link.description}
    <div
      class="p-16 text-gray-500 border-t border-gray-300 dark:border-gray-dark duration-200"
    >
      {link.description}
    </div>
  {/if}
</div>
