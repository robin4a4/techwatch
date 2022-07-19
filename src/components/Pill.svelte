<script lang="ts">
  import { PillType } from "../types/PillType";

  export let value: PillType;
  export let isActive: boolean = false;

  const pillData = new Map<
    PillType,
    { text: string; defaultClass: string; activeClass: string }
  >([
    [
      PillType.design,
      {
        text: "Design",
        defaultClass: "text-blue-600",
        activeClass: "bg-blue-600",
      },
    ],
    [
      PillType.javascript,
      {
        text: "Javascript",
        defaultClass: "text-red-600",
        activeClass: "bg-red-600",
      },
    ],
    [
      PillType.python,
      {
        text: "Python",
        defaultClass: "text-orange-600",
        activeClass: "bg-orange-600",
      },
    ],
    [
      PillType.css,
      {
        text: "CSS",
        defaultClass: "text-purple-600",
        activeClass: "bg-purple-600",
      },
    ],
  ]);
</script>

<div
  class={`px-16 py-8 font-bold rounded-full ${
    isActive
      ? `text-white ${pillData.get(value)?.activeClass}`
      : ` border border-b-300 ${pillData.get(value)?.defaultClass}`
  }`}
>
  {pillData.get(value)?.text}
</div>
