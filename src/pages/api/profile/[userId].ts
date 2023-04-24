import type { NextApiRequest, NextApiResponse } from "next";
import errorResponse from "~/server/errorResponse";
import { profileDb, userDb } from "~/server/deta";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
// GET profile data.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const profile = await profileDb.get(userId as string);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const user = await userDb.get(userId as string);
    if (profile && user) {
      const externalProfile = {
        userId: user.key,
        avatar: user.image,
        username: user.name,
        firstname: profile?.firstname,
        middlename: profile?.middlename,
        surname: profile?.surname,
      };
      if (session) {
        if (session.user.id === userId) res.status(200).json(profile);
        else res.status(200).json(externalProfile);
      } else {
        res.status(200).json(externalProfile);
      }
    } else res.status(404).json(errorResponse(404));
  } else res.status(405).json(errorResponse(405));
}
