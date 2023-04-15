import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { avatar, email, name, password } = req.body;
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  if (!email) return res.status(400).json({ ok: false });
  const token = await db.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            email,
          },
          create: {
            avatar,
            name,
            email,
            password,
          },
        },
      },
    },
  });
  
  return res.json({
    ok: true,
  });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });