export interface TaskState {
  error: null;
  isLoading: false;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
}
