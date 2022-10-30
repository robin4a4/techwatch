import { api } from "./api";
import type { Actions } from "./$types";
import type { Link } from "@prisma/client";

export const actions: Actions = {
  add: async ({ request }) => {
    const form = await request.formData();
    const formAsObj = Object.fromEntries(form as any); // doing that because dom.iterable does not work in tsconfig.
    formAsObj.categoryId = parseInt(formAsObj.categoryId, 10);
    const data = formAsObj as Link;
    await api("POST", { data });
  },
};
