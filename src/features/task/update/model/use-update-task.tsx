import { UpdateTaskData, useTasks } from "@/entities/task";
import { useCanUpdateTaskFn } from "./use-can-update-task";
import { useGetConfirmation } from "@/shared/lib/confirmation";

export function useUpdateTask(taskId: string) {
  const getConfirmation = useGetConfirmation();
  const canUpdateFn = useCanUpdateTaskFn();

  const updateModalRaw = useTasks((s) => s.updateTask);

  const updateTask = async (data: UpdateTaskData, onUpdate: () => void) => {
    if (!canUpdateFn(taskId)) return;

    const confirmation = await getConfirmation({
      description:
        "Вы действительно хотите сохранить задачу?",
    });

    if (!confirmation) return;

    await updateModalRaw(taskId, data);
    onUpdate();
  };

  return { updateTask };
}
