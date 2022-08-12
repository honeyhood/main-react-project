export type SortType = {
  name: string;
  sortProperty: "rating" | "price" | "title" | "-rating" | "-price" | "-title";
};

export interface FilterSliceState {
  categoryId: number;
  sortType: SortType;
  searchValue: string;
  currentPage: number;
}
