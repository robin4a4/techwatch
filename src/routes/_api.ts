import { PrismaClient } from "@prisma/client";
import type { Link } from "@prisma/client";

const prisma = new PrismaClient();

export async function api(method: string, data?: Link) {
  let body = {};
  let status = 500;
  switch (method.toUpperCase()) {
    case "GET":
      body = {
        links: await prisma.link.findMany({
          include: {
            category: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        }),
        categories: await prisma.category.findMany(),
      };
      status = 200;
      break;
    case "POST":
      if (!data) break;
      body = await prisma.link.create({
        data: {
          link: data.link,
          email: data.email,
          description: data.description || "",
          categoryId: data.categoryId,
        },
      });
      status = 201;
      break;
  }
  return {
    body,
    status,
  };
}
