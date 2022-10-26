import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchPizzas, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzas>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://62bb5f6b7bdbe01d529cb308.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);
