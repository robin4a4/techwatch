export enum PillType {
  design = "design",
  python = "python",
  javascript = "javascript",
  css = "css",
}

export type Link = {
  id: number;
  link: string;
  description?: string;
  email: string;
  category: Prisma.CategoryCreateNestedOneWithoutLinksInput;
};
