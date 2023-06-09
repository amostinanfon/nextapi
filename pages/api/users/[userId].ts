import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // await serverAuth(req, res);

    const { userId } = req.query;

    console.log('userId type is : ', typeof(userId));

    if (typeof userId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!userId) {
      throw new Error('Missing Id');
    }

    const userSingle = await prismadb.user.findUnique({
      where: {
        id: userId
      },
      select:{
        email: true,
        name: true
      }
    });

    return res.status(200).json(userSingle);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
