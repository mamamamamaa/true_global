export interface CategoryState {
  error: null;
  isLoading: false;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  taskCount: number;
}
