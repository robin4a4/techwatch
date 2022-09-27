<script lang="ts">
	import type { PageData } from './$types';
	import LinkContent from "../../components/LinkContent.svelte";
	import type { LinkWithCategory } from "src/types";

	export let data: PageData;
	$: links = data.links as LinkWithCategory[];
</script>

{#each links as link}
	<LinkContent {link} />
{/each}
  