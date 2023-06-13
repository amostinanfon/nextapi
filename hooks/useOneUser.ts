import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const useUserPerPage = (pageIndex?: any) => {
  const { data, error, isLoading } = useSwr(pageIndex ? `/api/page/${pageIndex}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading 
  }
};

// const useUserPerPage = () => {
//   const { data, error, isLoading } = useSwr('/api/page', fetcher, {
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   });
//   return {
//     data,
//     error,
//     isLoading
//   }
// };


export default useUserPerPage;
