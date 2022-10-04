import PrismaClient from "$lib/prisma";
import type { Link } from "@prisma/client";

const prisma = new PrismaClient();

export async function api(
  method: string,
  args?: { categoryName?: string; data?: Link },
  userAgent?: string | null
) {
  const hasCategory = args && args.categoryName;
  let body = {};
  let status = 500;
  switch (method.toUpperCase()) {
    case "GET":
      body = {
        links: await prisma.link.findMany({
          ...(hasCategory && {
            where: {
              category: {
                name: args.categoryName,
              },
            },
          }),
          orderBy: [
            {
              id: "desc",
            },
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
      if (
        !args ||
        !args.data ||
        args.data.categoryId > 5 ||
        !args.data.categoryId
      )
        break;
      if (
        args.data.categoryId < 1 ||
        typeof args.data.categoryId !== "number" ||
        typeof args.data.link !== "string" ||
        (args.data.description && typeof args.data.description) !== "string" ||
        args.data.link.length < 7 ||
        userAgent === "PostmanRuntime/7.29.2"
      ) {
        const descriptionArray = [
          "A envoyer à giovanni absolument",
          "Completement dingue, giovanni doit absolument voir ça",
          "Quel rappeur fantastique",
          "C'est autre chose que pnl ça",
          "Si seulement Giovanni pouvait voir cette video"
        ]
        body = await prisma.link.create({
          data: {
            link: "https://www.youtube.com/watch?v=9H_NH51se-s",
            email: "giovanni@simon.fr",
            description: descriptionArray[Math.floor(Math.random() * descriptionArray.length)],
            categoryId: 1,
          },
        });
      } else {
        body = await prisma.link.create({
          data: {
            link: args.data.link,
            email: args.data.email || "",
            description: args.data.description || "",
            categoryId: args.data.categoryId,
          },
        });
      }
      status = 201;
      break;
  }
  return {
    body,
    status,
  };
}
