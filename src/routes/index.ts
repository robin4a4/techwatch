import { api } from "./_api";
import type { Link, Category } from "@prisma/client";
import type { RequestHandler } from "./__types";

export const get: RequestHandler = async () => {
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

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData();
  const formAsObj = Object.fromEntries(form);
  formAsObj.categoryId = parseInt(formAsObj.categoryId, 10);
  await api("POST", formAsObj as Link);
  return {};
};
