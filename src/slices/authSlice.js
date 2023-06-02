import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../services/authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    error: false,
    success: false,
    loading: false
};

export const cadastro = createAsyncThunk('auth/cadastro',
    async(user, thunkAPI) => {
        const data = await authService.cadastro(user);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cadastro.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(cadastro.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.user = action.payload;
        }).addCase(cadastro.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;