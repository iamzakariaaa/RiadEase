import { useQuery } from "@tanstack/react-query";
import { getRiads } from "../../services/apiRiads";

export function useRiads() {
  const {
    isLoading,
    data: riads,
    error,
  } = useQuery({
    queryKey: ["riads"],
    queryFn: getRiads,
  });

  return { isLoading, error, riads };
}
