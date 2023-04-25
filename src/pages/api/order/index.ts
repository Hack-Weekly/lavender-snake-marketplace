import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import errorResponse from "~/server/errorResponse";
import { isOrder } from "~/server/utils";
// TODO POST buy order

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { body } = req;
  if (req.method === "POST") {
    if (session) {
      if (isOrder(body)) {
        // TODO actual buy order structure
      } else res.status(500).json({ error: "Invalid Order." });
    } else res.status(401).json({ error: "Cannot Order." });
  } else res.status(405).json(errorResponse(405));
}
