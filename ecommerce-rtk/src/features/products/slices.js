import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsService } from "./productsAPI";
const initialState = { products: [], selectedProduct: null, loading: false, error: null };

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProductsService();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    selectProduct(state) {
      return { ...initialState, products: state.selectedProduct };
    },

  },
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload.products;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export const { getProducts, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
