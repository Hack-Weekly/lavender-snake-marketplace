import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { isProfile } from "~/server/utils";
import { profileDb } from "~/server/deta";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
// POST a new profile.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { body } = req;
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      if (isProfile(body)) {
        const data = {
          firstname: body.firstname,
          middlename: body.middlename,
          surname: body.surname,
          address: body.address,
          email: body.email,
          mobile: body.mobile,
        };
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          const profile = await profileDb.put(data, session.user.id);
          res.status(200).json(profile);
        } catch (error) {
          res.status(500).json({ error: error });
        }
      } else res.status(500).json({ error: "Invalid Profile." });
    } else res.status(401).json(errorResponse(401));
  } else res.status(405).json(errorResponse(405));
}
