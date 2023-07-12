export interface TaskState {
  error: string | null | undefined;
  isLoading: boolean;
  currentCategory: number | null;
  tasks: Task[];
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
