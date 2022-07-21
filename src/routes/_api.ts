import { PrismaClient } from "@prisma/client";
import type { Link } from "../types";

const prisma = new PrismaClient();

export async function api(method: string, data?: Link) {
  let body = {};
  let status = 500;
  switch (method.toUpperCase()) {
    case "GET":
      body = await prisma.link.findMany();
      status = 200;
      break;
    case "POST":
      if (!data) break;
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
