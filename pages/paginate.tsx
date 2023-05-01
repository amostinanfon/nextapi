import React from 'react';
import {useState} from 'react';
import useSWR from 'swr';
import { MovieInterface } from '@/types';
import fetcher from '@/libs/fetcher';
import { isEmpty } from 'lodash';



interface MovieListProps {
    dataP: MovieInterface[];
    title: string;
}

const Paginate: React.FC<MovieListProps> = ({ dataP, title }) => {

    const [pageIndex, setPageIndex] = useState(0);
  
    const { data } = useSWR(`/api/movie?page=${pageIndex}`, fetcher);

    if (isEmpty(data)) {
      return null;
    }
   
    return (
      <div className="px-4 md:px-12 mt-4 space-y-8 h-20 bg-white">
        <div>
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
          <div className="grid grid-cols-4 gap-2">
            {data.map((item: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <div key={item.id}>{item.title}</div>)}
            <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
            <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Paginate;