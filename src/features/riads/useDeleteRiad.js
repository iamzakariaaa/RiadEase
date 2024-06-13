import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteRiad as deleteRiadApi } from "../../services/apiRiads";

export function useDeleteRiad() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRiad } = useMutation({
    mutationFn: deleteRiadApi,
    onSuccess: () => {
      toast.success("Riad successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["riads"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRiad };
}
