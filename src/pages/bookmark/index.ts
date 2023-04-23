import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
// TODO POST item to bookmark
// TODO DELETE item from bookmark
// TODO GET bookmark list

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   const { body } = req;
  if (req.method === "POST") {
  } else res.status(405).json(errorResponse(405));
}
