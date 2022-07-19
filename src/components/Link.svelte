<script>
  import Pill from "./Pill.svelte";
  import { PillType } from "../types/PillType";
</script>

<div class="flex flex-col w-full border border-gray-300 rounded-md">
  <div class="flex items-center justify-between w-full p-16">
    <div class="flex items-center gap-8 font-bold">
      <p>
        <span class="text-gray-300">https://</span><span class="text-blue-600">
          twitter.fr
        </span>
      </p>
    </div>
    <Pill value={PillType.design} />
  </div>
  <div class="p-16 text-gray-500 border-t border-gray-300">
    Lorem ipsum dolor sit amet. Et labore voluptates hic repellendus repellat 33
    atque. Ex voluptatum aliquid aut assumenda facilis vel itaque quo corporis
    corrupti ea mollitia maiores sit tempora quia quo molestias consequuntur.
    Est sunt dolores sed accusamus distinctio sit consequatur impedit odio
    commodi.
  </div>
</div>
