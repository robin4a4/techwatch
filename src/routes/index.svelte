<script lang="ts">
  import type { Category } from "@prisma/client";
  import type { LinkWithCategory } from "../types";

  import Header from "../components/Header.svelte";
  import LinkForm from "../components/LinkForm.svelte";
  import LinkContent from "../components/LinkContent.svelte";

  export let categories: Category[];
  export let links: LinkWithCategory[];
</script>

<div class="mx-auto w-[760px] flex flex-col gap-32">
  <Header />
  <LinkForm {categories} />
  {#each links as link}
    <LinkContent {link} />
  {/each}
</div>
