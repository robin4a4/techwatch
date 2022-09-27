export const pillData = new Map<string, { text: string; colorClasses: string, colorCurrent: string }>(
  [
    [
      "design",
      {
        text: "Design",
        colorClasses:
          "text-blue-600 dark:text-blue-500 peer-checked:bg-blue-600 peer-checked:border-blue-600",
        colorCurrent: 'bg-blue-600 border-blue-600'
      },
    ],
    [
      "javascript",
      {
        text: "Javascript",
        colorClasses:
          "text-red-600 dark:text-red-500 peer-checked:bg-red-600 peer-checked:border-red-600",
          colorCurrent: 'bg-red-600 border-red-600'
      },
    ],
    [
      "python",
      {
        text: "Python",
        colorClasses:
          "text-orange-600 dark:text-orange-500 peer-checked:bg-orange-600 peer-checked:border-orange-600",
          colorCurrent: 'bg-orange-600 border-orange-600'
      },
    ],
    [
      "css",
      {
        text: "CSS",
        colorClasses:
          "text-purple-600 dark:text-purple-500 peer-checked:bg-purple-600 peer-checked:border-purple-600",
          colorCurrent: 'bg-purple-600 border-purple-600'
      },
    ],
    [
      "computing",
      {
        text: "Computing",
        colorClasses:
          "text-yellow-600 dark:text-yellow-500 peer-checked:bg-yellow-600 peer-checked:border-yellow-600",
        colorCurrent: 'bg-yellow-600 border-yellow-600'
      },
    ],
  ]
);