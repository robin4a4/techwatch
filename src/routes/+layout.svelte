<script lang="ts">
    import "../app.css";
    import Header from "../components/Header.svelte";
    import LinkForm from "../components/LinkForm.svelte";
    import PillRowNav from "../components/PillRowNav.svelte";
    import type { PageData } from './$types';

    export let data: PageData;
    $: categories = data.categories;
    $: currentCategory = data.currentCategory;
    let isFormShown = false;

    function handleClick() {
      isFormShown = !isFormShown;
    }
</script>

<svelte:head>
	<title>Techwatch</title>
	<meta name="description" content="A resource list app" />
</svelte:head>

<div class="mx-auto w-full md:w-[760px] flex flex-col gap-32 px-16 pb-32">
  <Header />
	{#if isFormShown}
    <LinkForm {categories} />
  {/if}
  
	<div class="flex flex-col md:flex-row md:items-center justify-between">
	  <span
		class="font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-32"
		>Link</span
	  >
		<PillRowNav {categories} {currentCategory} />
	</div>
    <div class="flex flex-col gap-24">
        <slot />
    </div>
    <button class='fixed top-0 right-0 w-24 h-24' on:click={handleClick}></button>
</div>
  


  