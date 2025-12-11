import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getMovementsAPI, transferAPI, type TransferValues } from '~/api/modules/Movements';
import { movementAdapter } from '~/types/adapters/movementAdapter';
import type { Movement } from '~/types/movements';

interface MovementState {
  recentsMovements: Movement[] | null;
  errorMessage: string;
  loading: boolean;
}

const initialState: MovementState = {
  recentsMovements: null,
  errorMessage: "",
  loading: false,
};

// --- LOGIN THUNK ---
export const transfer = createAsyncThunk(
  'user/transfer',
  async (transferValues: TransferValues, { rejectWithValue }) => {
    const response = await transferAPI(transferValues);
    if (response.errors && response.errors.length > 0) {
      return rejectWithValue(response.errors[0].error);
    }
    console.log("response movements: ",response.data.data)
    return response.data.data; 
  }
);


// export const register = createAsyncThunk(
//   'user/fetchRegister',
//   async (registerValues: RegisterValues, { rejectWithValue }) => {
//     const response = await registerAPI(registerValues);
//     if (response.errors && response.errors.length > 0) {
//       return rejectWithValue(response.errors[0].error);
//     }
//     return response.data;
//   }
// );

// --- WHO AM I THUNK ---
export const movements = createAsyncThunk(
  'user/movement',
  async (_, { rejectWithValue }) => {
    const response = await getMovementsAPI();
    if (response.errors && response.errors.length > 0) {
      return rejectWithValue(response.errors[0].error);
    }

    return response.data.data.map((value: any) => movementAdapter(value));
  }
);

export const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(movements.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(movements.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.recentsMovements = action.payload;
      })
      .addCase(movements.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string || "Error al cargar los movimientos";
      })
      // REGISTER
      // .addCase(register.pending, (state) => {
      //   state.loading = true;
      //   state.errorMessage = "";
      //   state.registerSuccess = false;
      // })
      // .addCase(register.fulfilled, (state) => {
      //   state.loading = false;
      //   state.registerSuccess = true; // ¡Registro exitoso!
      // })
      // .addCase(register.rejected, (state, action) => {
      //   state.loading = false;
      //   state.errorMessage = action.payload as string || "Error al registrarse";
      // })
      // // WHO AM I
      // .addCase(whoAmI.fulfilled, (state, action: PayloadAction<any>) => {
      //   state.isLogged = true;
      //   state.value = action.payload;
      // })
      // .addCase(whoAmI.rejected, (state) => {
      // });
  },
});

// export const { logout, clearError } = userSlice.actions;

// Selectores
export const selectMovementErrorMessage = (state: { movement: MovementState }) => state.movement.errorMessage;
export const selectMovementLoading = (state: { movement: MovementState }) => state.movement.loading;
export const selectRecentsMovements = (state: { movement: MovementState }) => state.movement.recentsMovements;

export default movementSlice.reducer;