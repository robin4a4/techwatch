import { api } from "./_api";
import type { Link } from "@prisma/client";
import type { RequestHandler } from "./__types";

export const GET: RequestHandler = async () => {
  const response = await api("GET");
  if (response.status === 404) {
    return {
      body: {
        links: [],
        categories: [],
      },
    };
  }
  if (response.status === 200) return response;
  return {
    status: response.status,
  };
};

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData();
  const formAsObj = Object.fromEntries(form as any); // doing that because dom.iterable does not work in tsconfig.
  formAsObj.categoryId = parseInt(formAsObj.categoryId, 10);
  await api("POST", formAsObj as Link);
  return {};
};
