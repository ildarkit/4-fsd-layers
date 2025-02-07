import { useTasks } from "./tasks.store";

export function useClearTasks() {
  const { tasks, removeTask, updateTask } = useTasks();

  return async ({
    userId,
    boardId,
  }: {
    userId?: string,
    boardId?: string, 
  }) => {
    if (!(userId || boardId)) return;
     
    for await (const task of tasks) {
      if (task.boardId === boardId)
        await updateTask(task.id, { boardId: undefined });

      if (task.authorId === userId)
        await removeTask(task.id);
    }
  }
}
