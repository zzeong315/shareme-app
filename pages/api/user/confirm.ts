import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";
import withHandler from "../../../lib/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const foundEmail = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!foundEmail) return res.status(404).end();
  req.session.user = {
    id: foundEmail.id,
  };
  if (foundEmail.password === password) {
    await req.session.save();
    await db.token.deleteMany({
      where: {
        userId: foundEmail.id,
      },
    });
    res.json({ ok: true });
  }
  res.json({ok: false});
}

export default withApiSession(withHandler({ methods: ["POST"], handler, isPrivate: false }));