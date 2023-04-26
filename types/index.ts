import { User } from "@prisma/client";

export interface MovieInterface {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}


export type SiteConfig = {
  name: string
  description: string
  url: string
  // ogImage: string
  // links: {
  //   twitter: string
  //   github: string
  // }
}

export interface UserPageProps {
   users: User[]
}