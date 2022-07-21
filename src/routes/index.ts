import type { Link } from "src/types";
import { api } from "./_api";
import type { RequestHandler } from "./__types";

export const get: RequestHandler = async () => {
  const response = await api("GET");
  if (response.status === 404) {
    return {
      body: {
        links: [],
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
  const formAsObj = Object.fromEntries(form) as Link;
  await api("POST", formAsObj);
  return {};
};
