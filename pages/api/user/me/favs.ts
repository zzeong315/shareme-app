import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;
  const favs = await db.fav.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      Post: {
        include: {
          user: {
            select: {
              name: true,
              id: true,
              avatar: true,
            },
          },
          bookmarks: {
            select: {
              userId: true,
            }
          },
          _count: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    favs,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
