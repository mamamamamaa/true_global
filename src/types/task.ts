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
  dateStart: Date;
  dateEnd: Date;
}
