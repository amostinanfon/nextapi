import { NextApiRequest, NextApiResponse } from "next";
import useMovies from "@/hooks/useMovieList";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";
// import _, { parseInt } from "lodash";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 try {
    if (req.method !== 'GET') {
        return res.status(405).end();
      }

      const { pageId } = req.query;


      if (typeof pageId !== 'string') {
        throw new Error('Invalid Id');
      }
  
      if (!pageId) {
        throw new Error('Missing Id');
      }

      let newPageId = parseInt(pageId)

      
      const results = await prismadb.movie.findMany({
        skip: (newPageId * 3 + 1),  // How many rows to skip
        take: 3, // Page size
      })
    
 } catch (error) {
    console.log(error);
 }


    await serverAuth(req, res);

 

}
