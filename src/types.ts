import type { Link, Category } from "@prisma/client";

export interface LinkWithCategory extends Link {
    category: Category;
}