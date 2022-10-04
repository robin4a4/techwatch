<script lang="ts">
  import Pill from "./Pill.svelte";
  import type { LinkWithCategory } from "src/types";

  export let link: LinkWithCategory;
</script>

<a
  href={link.link}
  target="blank"
  class={`flex ${link.description ? 'items-start' : 'items-center'} justify-between w-full shadow-md shadow-neutral-200 duration-200 rounded-xl bg-white p-16 ${link.email === "giovanni@simon.fr" ? "rotate-3 animate-bounce bg-red-200" : ""}`}
>
  <div class="flex flex-col gap-8 justify-between max-w-[60%] md:max-w-[70%]">
      <div  class="font-bold flex items-center">
        <span class="text-blue-600 dark:text-blue-500 truncate block">
          {link.link.replace(/https:\/\/|http:\/\//gi, "")}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 min-w-[20px] text-gray-400 dark:text-gray-600 duration-200"
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
      </div>
      {#if link.description}
        <div
          class="text-gray-500 duration-200"
        >
          {link.description}
        </div>
      {/if}
  </div>
  <Pill category={link.category} noButton isEasterEgg={link.email === "giovanni@simon.fr"}/>
</a>
