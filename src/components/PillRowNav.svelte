<script lang="ts">
  import type { Category } from "@prisma/client";
  import Pill from "../components/Pill.svelte";

  export let categories: Category[];
  export let currentCategory: string;
</script>

<div class="flex items-center gap-4 md:gap-8 flex-wrap">
  {#each categories as category}
      <a
        href="{category.name}"
      >
      <Pill {category} isChecked={currentCategory === category.name}/>
      </a>
  {/each}
</div>
