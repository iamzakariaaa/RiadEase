import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditRiad } from "../../services/apiRiads";

export function useCreateRiad() {
  const queryClient = useQueryClient();

  const { mutate: createRiad, isLoading: isCreating } = useMutation({
    mutationFn: createEditRiad,
    onSuccess: () => {
      toast.success("New riad successfully created");
      queryClient.invalidateQueries({ queryKey: ["riads"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRiad };
}
