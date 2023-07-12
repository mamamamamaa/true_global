export interface CategoryState {
  error: string | null | undefined;
  isLoading: boolean;
  categories: Category[];
  editModal: {
    isOpen: boolean;
    categoryId: number | null;
  };
}

export interface Category {
  id: number;
  name: string;
  date_created: string;
  task_count: number;
}

export interface CategoryResponse {
  id: number;
  name: string;
  date_created: string;
  task_count: number;
}

export interface AddCategoryDto {
  name: string;
}

export interface UpdateCategoryDto {
  name: string;
  id: number;
}
