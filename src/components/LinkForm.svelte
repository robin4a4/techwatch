<script lang="ts">
  import type { Category } from "@prisma/client";
  import PillRow from "./PillRow.svelte";

  export let categories: Category[];

  let src = "images/colored-arrow.svg";
  let isFormOpen = false;

  const handleFormToggle = () => (isFormOpen = !isFormOpen);
</script>

<section class="p-[6px] rounded-xl gradient w-full">
  {#if isFormOpen}
    <button
      on:click={handleFormToggle}
      type="button"
      class="flex items-center justify-between w-full h-64 px-16 font-bold bg-white dark:bg-black dark:text-gray-300 rounded-md"
    >
      Add link
      <img {src} alt="colored arrow down" />
    </button>
  {:else}
    <form
      method="post"
      action="./"
      class="flex flex-col w-full bg-white dark:bg-black duration-200 rounded-md"
    >
      <div
        class="flex border-b border-gray-200 dark:border-gray-dark duration-200"
      >
        <div
          class="flex flex-1 gap-8 items-center border-r border-gray-200 dark:border-gray-dark duration-200 pl-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 text-gray-900 dark:text-gray-300 duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="url"
            name="link"
            placeholder="https://css-tricks.com/"
            class="py-16 px-8 w-full outline-none bg-transparent dark:text-gray-300 duration-200"
            required
          />
        </div>
        <div class="flex gap-8 items-center flex-1 pl-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 text-gray-900 dark:text-gray-300 duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="john@doe.com"
            class="py-16 px-8 w-full outline-none rounded-tr-md bg-transparent dark:text-gray-300 duration-200"
            required
          />
        </div>
      </div>
      <div
        class="flex flex-col gap-8 border-b border-gray-200 dark:border-gray-dark duration-200 p-16"
      >
        <p>
          <span class="font-bold text-gray-900 dark:text-gray-300 duration-200"
            >Description</span
          >
          <span class="font-bold text-gray-400 text-14">(optional)</span>
        </p>
        <textarea
          name="description"
          class="w-ful min-h-[70px] outline-none bg-transparent dark:text-gray-300 duration-200"
        />
      </div>
      <div
        class="flex gap-8 items-center border-b border-gray-200 dark:border-gray-dark duration-200 p-16"
      >
        <span class="font-bold text-gray-900 dark:text-gray-300 duration-200"
          >Category</span
        >
        <PillRow {categories} />
      </div>
      <div
        class="bg-gray-100 dark:bg-gray-darker duration-200 flex justify-between p-16 rounded-b-md"
      >
        <button type="button" on:click={handleFormToggle}>
          <img {src} alt="colored arrow down" class="rotate-180" />
        </button>
        <button
          type="submit"
          class="rounded gradient px-32 py-16 font-bold text-16 text-white duration-150 hover:scale-110"
        >
          Add
        </button>
      </div>
    </form>
  {/if}
</section>
