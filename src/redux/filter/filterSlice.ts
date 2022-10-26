import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortType } from "./types";

const initialState: FilterSliceState = {
  categoryId: 0,
  sortType: {
    name: "популярности",
    sortProperty: "rating",
  },
  searchValue: "",
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, { payload }: PayloadAction<number>) {
      state.categoryId = payload;
    },
    setSortType(state, { payload }: PayloadAction<SortType>) {
      state.sortType = payload;
    },
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload;
    },
    setFilters(state, { payload }: PayloadAction<FilterSliceState>) {
      state.sortType = payload.sortType;
      state.currentPage = Number(payload.currentPage);
      state.categoryId = Number(payload.categoryId);
    },
  },
});

export const {
  setCategoryId,
  setSortType,
  setSearchValue,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
