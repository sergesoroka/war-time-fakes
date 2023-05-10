import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useData(page) {
  const { data, error, isLoading } = useSWR(
    `https://vox-dashboard.ra-devs.tech/api/wpposts?page=${page}`,
    fetcher
  );
  return {
    user: data,
    isLoading,
    isError: error,
  };
}
