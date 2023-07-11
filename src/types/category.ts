export interface CategoryState {
  error: string | null | undefined;
  isLoading: boolean;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  taskCount: number;
}
