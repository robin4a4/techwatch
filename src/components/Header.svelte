<script lang="ts">
  import themeStore, { setTheme } from "svelte-themes";

  let src = "images/logo.svg";
  let srcDark = "images/logo-dark.svg";

  let isDarkMode: boolean | undefined;
  $: isDarkMode = $themeStore.theme === "dark";
</script>

<section class="flex items-center justify-between w-full h-[100px]">
  <img src={isDarkMode ? srcDark : src} alt="techwatch logo" />
  <button
    type="button"
    on:click={() => setTheme(isDarkMode ? "light" : "dark")}
    class="grid p-8 bg-gray-200 dark:bg-gray-dark duration-200 rounded-full hover:bg-gray-300 place-content-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-16 h-16 dark:text-gray-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {#if isDarkMode}
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      {:else}
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      {/if}
    </svg>
  </button>
</section>
