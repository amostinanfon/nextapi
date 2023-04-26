import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import useUsersAllPage from "@/hooks/useUserList";
import useUserPerPage from "@/hooks/useOneUser";
import { UserPageProps } from '../types/index';



  export default function UserPage({ users }: UserPageProps) {
    // Loop and render posts.
  }
  
  export async function getStaticPaths(context: any): Promise<GetStaticPathsResult> {

    // Get total number of users from API.
    const totalPages = await useUsersAllPage() 
    const numberOfPages = Math.ceil(Number (totalPages) / 5)
  
    // Build paths `blog/0`, `blog/1` ...etc.
    const paths = Array(numberOfPages)
      .fill(0)
      .map((_, page) => ({
        params: {
          page: `${page + 1}`,
        },
      }))
  
    return {
      paths,
      fallback: false,
    }
  }
  
//   export async function getStaticProps(
//     context : any
//   ): Promise<GetStaticPropsResult<UserPageProps>> {
//     // Call your API and get the posts for the current page.
//     const users = await useUserPerPage({
//       take: 10,
//       offset: context.params.page ? 5 * context.params.page : 0,
//     })
  
//     // if (!users.length) {
//     //   return {
//     //     notFound: true,
//     //   }
//     // }
  
//     // return {
//     //   props: {
//     //     users,
//     //   },
//     // }
//   }
  