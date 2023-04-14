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
  const favs = await db.fav.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      Post: {
        include: {
          user:true,
          _count:true,
        },
      },
    },
  });
  // console.log("------favs------")
  // console.log(favs);
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