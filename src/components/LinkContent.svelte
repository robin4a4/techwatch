<script lang="ts">
  import type { Link } from "@prisma/client";
  import Pill from "./Pill.svelte";

  export let link: Link;
</script>

<div class="flex flex-col w-full border border-gray-300 rounded-md">
  <div class="flex items-center justify-between w-full p-16">
    <div class="flex items-center gap-8 font-bold w-full">
      <a href={link.link} class="flex items-center">
        <span class="text-gray-300">https://</span>
        <span class="text-blue-600 truncate w-[50%] block">
          {link.link.replace(/https:\/\/|http:\/\//gi, "")}
        </span>
      </a>
    </div>
    <!-- <Pill category={link.category} /> -->
  </div>
  {#if link.description}
    <div class="p-16 text-gray-500 border-t border-gray-300">
      {link.description}
    </div>
  {/if}
</div>
