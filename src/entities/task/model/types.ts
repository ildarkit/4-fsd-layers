export type Task = {
  id: string;
  title: string;
  description?: string;
  authorId: string;
  boardId?: string;
};

export type TaskPartial = {
  id: string;
  title: string;
  authorId: string;
  boardId?: string;
};

export type CreateTaskData = {
  title: string;
  authorId: string;
};

export type UpdateTaskData = {
  title?: string;
  description?: string;
  authorId?: string;
  boardId?: string;
};
