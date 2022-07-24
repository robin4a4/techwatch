<script lang="ts">
  import type { Category } from "@prisma/client";
  import Pill from "../components/Pill.svelte";

  export let categories: Category[];
</script>

<div class="flex items-center gap-8">
  {#each categories as category}
    <label>
      <input
        type="radio"
        id={category.id.toString()}
        name="categoryId"
        value={category.id.toString()}
        class="sr-only peer"
        required
      />
      <Pill {category} />
    </label>
  {/each}
</div>
