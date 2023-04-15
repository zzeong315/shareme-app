import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const profile = await db.user.findUnique({
      where: { id: req.session.user?.id },
    });
    res.json({
      ok: true,
      profile,
    });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: { avatar, name, password },
    } = req;
    const currentUser = await db.user.findUnique({
      where: {
        id: user?.id,
      },
    });
    if (avatar && avatar !== currentUser?.avatar) {
      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          avatar,
        },
      });
    }
    if (name && name !== currentUser?.name) {
      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name,
        },
      });
    }
    if (password && password !== currentUser?.password) {
      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          password,
        },
      });
    }
    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
