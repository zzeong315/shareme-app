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
          user: true,
          _count: true,
        },
      },
    },
  });
  // console.log(bookmarks);
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