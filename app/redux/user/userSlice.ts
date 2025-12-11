import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loginAPI, whoAmIAPI, registerAPI, type LoginValues, type RegisterValues, balanceAPI } from '~/api/modules/User'; 
import { setJWT, removeJWT } from '~/api/LocalStorage'; 
import type { User } from '~/types/user';
import { userAdapter } from '~/types/adapters/userAdapter';

interface UserState {
  value: User | null;
  balanceValues: any | null;
  errorMessage: string;
  loading: boolean;
  isLogged: boolean;
  registerSuccess: boolean; 
}

const initialState: UserState = {
  value: null,
  balanceValues: null,
  errorMessage: "",
  loading: false,
  isLogged: false,
  registerSuccess: false,
};

// --- LOGIN THUNK ---
export const login = createAsyncThunk(
  'user/fetchLogin',
  async (loginValues: LoginValues, { rejectWithValue }) => {
    const response = await loginAPI(loginValues);
    if (response.errors && response.errors.length > 0) {
      return rejectWithValue(response.errors[0].error);
    }
    return response.data;
  }
);


export const register = createAsyncThunk(
  'user/fetchRegister',
  async (registerValues: RegisterValues, { rejectWithValue }) => {
    const response = await registerAPI(registerValues);
    if (response.errors && response.errors.length > 0) {
      return rejectWithValue(response.errors[0].error);
    }
    return response.data;
  }
);

// --- WHO AM I THUNK ---
export const whoAmI = createAsyncThunk(
  'user/whoAmI',
  async (_, { rejectWithValue }) => {
    const response = await whoAmIAPI();
    if (response.errors && response.errors.length > 0) {
      return rejectWithValue(response.errors[0].error);
    }
    console.log("userAdapter",userAdapter(response.data.data))
    console.log("userAdapter2",response.data.data)
    return userAdapter(response.data.data);
  }
);

export const balance = createAsyncThunk(
  'user/balance',
  async (_, { rejectWithValue }) => {
    const response = await balanceAPI();
    if (response.errors && response.errors.length > 0) {
      return rejectWithValue(response.errors[0].error);
    }
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.value = null;
      state.isLogged = false;
      removeJWT();
    },
    clearError: (state) => {
      state.errorMessage = "";
      state.registerSuccess = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLogged = true;
        state.value = action.payload;
        if (action.payload.data.jwt) setJWT(action.payload.data.jwt);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string || "Error al iniciar sesión";
      })
      // REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
        state.registerSuccess = false;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.registerSuccess = true; // ¡Registro exitoso!
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string || "Error al registrarse";
      })
      // WHO AM I
      .addCase(whoAmI.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLogged = true;
        state.value = action.payload;
      })
      .addCase(whoAmI.rejected, (state) => {
        state.isLogged = false;
        state.value = null;
        removeJWT();
      })
      .addCase(balance.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(balance.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.balanceValues = action.payload;
      })
      .addCase(balance.rejected, (state) => {
        state.isLogged = false;
        state.balanceValues = null;
        removeJWT();
      });
  },
});

export const { logout, clearError } = userSlice.actions;

// Selectores
export const selectIsLogged = (state: { user: UserState }) => state.user.isLogged;
export const selectUserErrorMessage = (state: { user: UserState }) => state.user.errorMessage;
export const selectUserLoading = (state: { user: UserState }) => state.user.loading;
export const selectRegisterSuccess = (state: { user: UserState }) => state.user.registerSuccess;
export const selectUserValue = (state: { user: UserState }) => state.user.value;
export const selectBalanceValues = (state: { user: UserState }) => state.user.balanceValues;

export default userSlice.reducer;