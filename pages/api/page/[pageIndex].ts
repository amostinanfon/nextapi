import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { pageIndex } = req.query;
  
    let newPageIndex : number = Number(pageIndex)


    // console.log('newPageIndex :',newPageIndex);

      const users = await prismadb.user.findMany({
        take: 3, // Page size
      })

      const lastPostInResults = users[2] // Remember: zero-based index! :)
      const myCursor = lastPostInResults.id // Example: 29
    
      console.log(myCursor);
    return res.status(200).json(users);
   


    // await serverAuth(req, res);

    // const movies = await prismadb.user.findMany();

    // const users = await prismadb.user.findMany({
    //     // take: newPageIndex * 2, // Page size
    //     // skip: 1, // Skip the cursor row
    //     // cursor: {
    //     //   id: myCursor, // The cursor - only on pages 2 and above
    //     // },
    //     // orderBy: {
    //     //   id: 'asc', // Ordering results
    //     // },
    //   })

    // return res.status(200).json(users);


  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}
