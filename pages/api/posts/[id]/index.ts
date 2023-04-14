import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { 
    query: { id },
    session: { user },
  } = req;
  const post = await db.post.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      answers: {
        select: {
          answer: true,
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
        // take: 10,
        // skip: 20,
      },
      _count: {
        select: {
          answers: true,
          bookmarks: true,
          Fav: true,
        },
      },
    },
  });
  const hasBookmark = Boolean(
    await db.bookmark.findFirst({
      where: {
        postId: +id.toString(),
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  const hasFav = Boolean(
    await db.fav.findFirst({
      where: {
        PostId: +id.toString(),
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  res.json({
    ok: true,
    post,
    hasBookmark,
    hasFav,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));