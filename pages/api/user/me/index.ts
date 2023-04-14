import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await db.user.findUnique({
    where: { id: req.session.user?.id },
  });
  // console.log(profile);
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));