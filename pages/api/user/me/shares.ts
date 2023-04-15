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
  const posts = await db.post.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      user: {
        select:{
          name: true,
          id: true,
          avatar: true,
        }
      },
      _count: true,
      Fav: {
        select: {
          userId: true,
        }
      },
      bookmarks: {
        select: {
          userId: true,
        }
      },
    }
  });

  res.json({
    ok: true,
    posts,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);