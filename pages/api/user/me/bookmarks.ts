import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    session: { user },
  } = req;
  const bookmarks = await db.bookmark.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      post: {
        include: {
          user: {
            select:{
              name: true,
              id: true,
              avatar: true,
            },
          },
          Fav: {
            select: {
              userId:true,
            },
          },
          _count: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    bookmarks,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);