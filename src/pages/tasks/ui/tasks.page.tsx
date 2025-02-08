import { CreateTaskButton, useCanCreateTask } from "@/features/task/create";
import { UiCetnerContentLayout } from "@/shared/ui/layouts/ui-center-content-layout";
import { TasksList } from "./tasks-list";
import { updateTaskDepsContext } from "@/features/task/update";
import { useCanViewBoardFn } from "@/features/board/view";

export function TasksPage() {
  const canCreate = useCanCreateTask();
  const canViewBoard = useCanViewBoardFn();

  const body = (
    <>
      <div className="flex gap-2 mt-10">
        <CreateTaskButton />
      </div>
      <TasksList className="mt-10" />
    </>
  );

  return (
    <updateTaskDepsContext.Provider
      value={{
        canViewBoard,
      }}
    >
      <UiCetnerContentLayout className="py-10">
        <h1 className="text-3xl ">Задачи</h1>
        {canCreate ? (
          body
        ) : (
          <div className="mt-5 text-xl">
            У вас нет прав для работы с этой страницей
          </div>
        )}
      </UiCetnerContentLayout>
    </updateTaskDepsContext.Provider>
  );
}
