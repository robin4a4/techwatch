import { PillType } from "./types";

export const pillData = new Map<
  PillType,
  { text: string; colorClasses: string }
>([
  [
    PillType.design,
    {
      text: "Design",
      colorClasses:
        "text-blue-600 peer-checked:bg-blue-600 peer-checked:border-blue-600",
    },
  ],
  [
    PillType.javascript,
    {
      text: "Javascript",
      colorClasses:
        "text-red-600 peer-checked:bg-red-600 peer-checked:border-red-600",
    },
  ],
  [
    PillType.python,
    {
      text: "Python",
      colorClasses:
        "text-orange-600 peer-checked:bg-orange-600 peer-checked:border-orange-600",
    },
  ],
  [
    PillType.css,
    {
      text: "CSS",
      colorClasses:
        "text-purple-600 peer-checked:bg-purple-600 peer-checked:border-purple-600",
    },
  ],
]);
