<script lang="ts">
  import type { PillType } from "../types";
  import { pillData } from "../consts";

  export let type: PillType;
</script>

<div
  class={`px-16 py-8 cursor-pointer font-bold rounded-full border border-gray-300 peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-600 ${
    pillData.get(type)?.colorClasses
  } peer-checked:text-white`}
>
  {pillData.get(type)?.text}
</div>
