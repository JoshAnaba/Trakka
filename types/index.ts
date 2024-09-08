export type Task = {
  id: string;
  name: string;
  description: string;
};

export type Column = {
  id: string;
  name: string;
  tasks: Task[];
};

export type Board = {
  name: string;
  columns: Column[];
};