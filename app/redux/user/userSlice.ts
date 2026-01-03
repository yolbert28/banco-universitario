import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loginAPI, whoAmIAPI, registerAPI, type LoginValues, type RegisterValues, balanceAPI, verifyAccountAPI } from '~/api/modules/User'; 
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
  isVerifying: boolean;
  isValidAccount: boolean;
  verificationError: string | null;
}

const initialState: UserState = {
  value: null,
  balanceValues: null,
  errorMessage: "",
  loading: false,
  isLogged: false,
  registerSuccess: false,
  isVerifying: false,
  isValidAccount: false,
  verificationError: null,
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

export const verifyAccount = createAsyncThunk(
  "user/verifyAccount",
  async (accountNumber: string, { rejectWithValue }) => {
    try {
      const response = await verifyAccountAPI(accountNumber);
      if (response.data && (!response.errors || response.errors.length === 0)) {
        return true; // Cuenta válida
      }
      return rejectWithValue(response.errors?.[0]?.error || "Cuenta no válida");
    } catch (error: any) {
      return rejectWithValue(error.message || "Error al verificar la cuenta");
    }
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
    },
    resetVerification: (state) => {
      state.isVerifying = false;
      state.isValidAccount = false;
      state.verificationError = null;
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
        state.registerSuccess = true; 
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
      })
      // VERIFY ACCOUNT
      .addCase(verifyAccount.pending, (state) => {
        state.isVerifying = true;
        state.isValidAccount = false;
        state.verificationError = null;
      })
      .addCase(verifyAccount.fulfilled, (state) => {
        state.isVerifying = false;
        state.isValidAccount = true;
      })
      .addCase(verifyAccount.rejected, (state, action) => {
        state.isVerifying = false;
        state.isValidAccount = false;
        state.verificationError = action.payload as string;
      });
  },
});

export const { logout, clearError, resetVerification } = userSlice.actions;

// Selectores
export const selectIsLogged = (state: { user: UserState }) => state.user.isLogged;
export const selectUserErrorMessage = (state: { user: UserState }) => state.user.errorMessage;
export const selectUserLoading = (state: { user: UserState }) => state.user.loading;
export const selectRegisterSuccess = (state: { user: UserState }) => state.user.registerSuccess;
export const selectUserValue = (state: { user: UserState }) => state.user.value;
export const selectBalanceValues = (state: { user: UserState }) => state.user.balanceValues;
export const selectIsVerifying = (state: { user: UserState }) => state.user.isVerifying;
export const selectIsValidAccount = (state: { user: UserState }) => state.user.isValidAccount;
export const selectVerificationError = (state: { user: UserState }) => state.user.verificationError;

export default userSlice.reducer;