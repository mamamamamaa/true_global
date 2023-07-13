export interface CategoryState {
  error: string | null | undefined;
  isLoading: boolean;
  categories: Category[];
  editCategoryModal: EditCategoryModal;
  createCategoryModal: CreateCategoryModal;
}

export interface Category {
  id: number;
  name: string;
  date_created: string;
  task_count: number;
}

export interface EditCategoryModal {
  category: Category | null;
}

export interface CreateCategoryModal {
  isOpen: boolean;
}

export interface AddCategoryDto {
  name: string;
}

export interface UpdateCategoryDto {
  name: string;
  id: number;
}
