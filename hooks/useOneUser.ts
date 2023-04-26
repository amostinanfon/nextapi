import useSwr from 'swr'
import fetcher from '@/libs/fetcher';



const useUserPerPage = (id?: any) => {
  const { data, error, isLoading } = useSwr(id ? `/api/users/${id}` : null, fetcher, {
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

export default useUserPerPage;
