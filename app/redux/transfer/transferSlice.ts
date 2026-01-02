// app/redux/transfer/transferSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { transferAPI, type TransferValues } from "~/api/modules/Movements";

export interface SuccessfulTransfer {
  account_number: string;
  amount: number;
  created_at: string;
  description: string;
}

interface TransferState {
  loading: boolean;
  error: string | null;
  success: boolean;
  transferDetails: SuccessfulTransfer | null;
}

const initialState: TransferState = {
  loading: false,
  error: null,
  success: false,
  transferDetails: null,
};

export const makeTransfer = createAsyncThunk(
  "transfer/makeTransfer",
  async (transferData: TransferValues, { rejectWithValue }) => {
    try {
      const response = await transferAPI(transferData);

      // Caso 1: La API responde correctamente, pero con un error de negocio.
      if (response.errors && response.errors.length > 0) {
        console.log("Error de API recibido:", response); // Este log sí se mostrará
        return rejectWithValue(
          response.errors[0]?.error || "Error en la transferencia"
        );
      }
      
      return response.data.data; // Caso de éxito
    } catch (error: any) {
      // Caso 2: Error de red o del servidor (la promesa es rechazada).
      console.error("Error de red o inesperado:", error);
      return rejectWithValue("No se pudo conectar con el servidor. Inténtalo más tarde.");
    }
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    resetTransferState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.transferDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.transferDetails = null;
      })
      .addCase(makeTransfer.fulfilled, (state, action: PayloadAction<SuccessfulTransfer>) => {
        state.loading = false;
        state.success = true;
        state.transferDetails = action.payload;
      })
      .addCase(makeTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.transferDetails = null;
      });
  },
});

export const { resetTransferState } = transferSlice.actions;

// Selectores
// Nota: Asegúrate de agregar el reducer 'transfer' a tu rootReducer en reduxStore.ts
export const selectTransferLoading = (state: { transfer: TransferState }) => state.transfer.loading
export const selectTransferError = (state: { transfer: TransferState }) => state.transfer.error
export const selectTransferSuccess = (state: { transfer: TransferState }) => state.transfer.success
export const selectTransferDetails = (state: { transfer: TransferState }) => state.transfer.transferDetails

export default transferSlice.reducer;
