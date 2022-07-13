import { PrismaClient } from "@prisma/client";

type Category = {
  id: number;
  name: string;
};

type Link = {
  id: number;
  link: string;
  description?: string;
  email: string;
  category: Category;
};

const prisma = new PrismaClient();

export async function api(method: string, data: Link) {
  let body = {};
  let status = 500;
  switch (method.toUpperCase()) {
    case "GET":
      body = await prisma.link.findMany();
      status = 200;
      break;
    case "POST":
      body = await prisma.link.create({
        data: {
          link: data.link,
          email: data.email,
          description: data.description || "",
          category: data.category,
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
