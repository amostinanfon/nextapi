import { GetStaticPathsResult, GetStaticPropsResult } from "next"
// import useUsersAllPage from "@/hooks/useUserList";
import useUserPerPage from "@/hooks/useOneUser";
import { UserPageProps } from '../types/index';
import React, { useState } from "react";
// import { PageProps } from "../types/index";

interface PageProps {
  index: number;
}

const Page: React.FC<PageProps> = ({ index }) => {

const { data } = useUserPerPage(index);
// const { data } = useUserPerPage();

console.log(data);

     return (
      data?.map(
        (item : any) => 
        <div key={item.id} className="text-lg w-1/2 bg-slate-200 p-3 text-center font-semibold">
          {item.id.slice(7,12)}
        </div>)
     )

}



  
  const PagePerAmos: React.FC<PageProps> = () => { 

    const [pageIndex, setPageIndex] = useState(1);

    // console.log('pageIndex',pageIndex);

 
  return (
    <div className="flex justify-center bg-slate-50 h-[500px]">
      <div className="text-black text-xl space-x-10 mt-10">
        <div className="font-bold text-2xl">Pagination</div>
        <div className="my-5">
          <Page index={pageIndex} />
        </div>
        <div style={{ display: 'none' }}><Page index={pageIndex + 1} /></div>
        <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        <button className=" bg-green-200 font-bold">Page : {pageIndex}</button>
      </div>
    </div>
  )
      
  }


  export default PagePerAmos;