import { PrismaClient } from "@prisma/client";
import type { Link } from "@prisma/client";

const prisma = new PrismaClient();

export async function api(method: string, data?: Link) {
  let body = {};
  let status = 500;
  switch (method.toUpperCase()) {
    case "GET":
      body = {
        links: [
          {
            id: 1,
            link: "test",
            email: "test",
            description: "test",
            categoryId: 1,
            category: {
              id: 1,
              name: "python",
            },
          },
        ],
        categories: [
          {
            id: 1,
            name: "python",
          },
        ],
      };
      status = 200;
      break;
    // case "POST":
    //   if (!data) break;
    //   body = await prisma.link.create({
    //     data: {
    //       link: data.link,
    //       email: data.email,
    //       description: data.description || "",
    //       categoryId: data.categoryId,
    //     },
    //   });
    //   status = 201;
    //   break;
  }
  return {
    body,
    status,
  };
}
