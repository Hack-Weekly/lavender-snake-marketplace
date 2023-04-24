import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
// TODO POST item to cart
// TODO DELETE item from cart
// TODO GET cart list

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   const { body } = req;
  if (req.method === "POST") {
  } else res.status(405).json(errorResponse(405));
}
