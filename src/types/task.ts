export interface TaskState {
  error: string | null | undefined;
  isLoading: boolean;
  tasks: Task[];
  activeTask: Task | null;
  activeDescription: string | null;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  date_start: string;
  date_end: string;
}

export interface CreateTaskDto {
  name: string;
  description: string;
  date_start: string;
  date_end: string;
}

export interface UpdateTaskDto {
  name?: string;
  description?: string;
  date_start?: string;
  date_end?: string;
}
