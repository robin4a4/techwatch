import PrismaClient from "$lib/prisma";
import type { Link } from "@prisma/client";

const prisma = new PrismaClient();

export async function api(method: string, args?: {categoryName?: string, data?: Link}) {
  let body = {};
  let status = 500;
  switch (method.toUpperCase()) {
    case "GET":
      body = {
        links: await prisma.link.findMany({
          ...(args && args.categoryName && {where: {
            category: {
              name: args.categoryName
            }
          }}),
          orderBy: [
            {
              id: 'desc',
            }
          ],
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
      if (!args || !args.data) break;
      body = await prisma.link.create({
        data: {
          link: args.data.link,
          email: args.data.email || "",
          description: args.data.description || "",
          categoryId: args.data.categoryId,
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
