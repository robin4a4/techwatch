<script lang="ts">
  import type { Category, Link } from "@prisma/client";

  import Header from "../components/Header.svelte";
  import LinkForm from "../components/LinkForm.svelte";
  import LinkContent from "../components/LinkContent.svelte";

  export let categories: Category[];
  export let links: Link[];
</script>

<div class="mx-auto w-[760px] flex flex-col gap-32">
  <Header />
  <LinkForm {categories} />
  {#each links as link}
    <LinkContent {link} />
  {/each}
</div>
