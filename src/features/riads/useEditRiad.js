import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRiad } from "../../services/apiRiads";
import { toast } from "react-hot-toast";

export function useEditRiad() {
  const queryClient = useQueryClient();

  const { mutate: editRiad, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRiadData, id }) => createEditRiad(newRiadData, id),
    onSuccess: () => {
      toast.success("Riad successfully edited");
      queryClient.invalidateQueries({ queryKey: ["riads"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editRiad };
}
