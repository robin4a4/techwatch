<script lang="ts">
  import type { Category } from "@prisma/client";
  import type { LinkWithCategory } from "../types";

  import Header from "../components/Header.svelte";
  import LinkForm from "../components/LinkForm.svelte";
  import LinkContent from "../components/LinkContent.svelte";
  import PillRow from "../components/PillRow.svelte";

  export let categories: Category[];
  export let links: LinkWithCategory[];
  let filteredLinks = links;
  function onFormChange(event: Event) {
    if (event && event.target) {
      const input = event.target as HTMLInputElement;

      const categoryId = input.id;
      filteredLinks = links.filter(
        (link) => link.categoryId === parseInt(categoryId, 10)
      );
    }
  }
</script>

<div class="mx-auto w-[760px] flex flex-col gap-32 px-16">
  <Header />
  <LinkForm {categories} />

  <div class="flex items-center justify-between">
    <span
      class="font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-32"
      >Link</span
    >
    <form on:change={onFormChange}>
      <PillRow {categories} />
    </form>
  </div>
  {#each filteredLinks as link}
    <LinkContent {link} />
  {/each}
</div>
