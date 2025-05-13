import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) throw new Error('Errore nel caricamento prodotti');
            const data = await response.json();
            return data.products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const dataSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        markOutOfStock: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(p => p.id === productId);
            if (product) {
                product.outOfStock = true;
            }
        },
        toggleFavorite: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(p => p.id === productId);
            if (product) {
                product.favorite = !product.favorite;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { markOutOfStock, toggleFavorite } = dataSlice.actions;

export default dataSlice.reducer;