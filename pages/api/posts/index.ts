import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      body: { content },
      session: { user },
    } = req;
    const post = await db.post.create({
      data: {
        content,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      post,
    });
  }
  if (req.method === "GET") {
    const posts = await db.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        Fav: {
          select: {
            userId: true,
          }
        },
        bookmarks: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            bookmarks: true,
            answers: true,
            Fav: true,
          },
        },
      },
    });

    res.json({
      ok: true,
      posts,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
