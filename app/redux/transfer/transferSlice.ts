// app/redux/transfer/transferSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { transferAPI, type TransferValues } from "~/api/modules/Movements";

interface TransferState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: TransferState = {
  loading: false,
  error: null,
  success: false,
};

export const makeTransfer = createAsyncThunk(
  "transfer/makeTransfer",
  async (transferData: TransferValues, { rejectWithValue }) => {
    try {
      const response = await transferAPI(transferData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Error al realizar la transferencia"
      );
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(makeTransfer.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(makeTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetTransferState } = transferSlice.actions;

// Selectores
// Nota: Asegúrate de agregar el reducer 'transfer' a tu rootReducer en reduxStore.ts
export const selectTransferLoading = (state: { transfer: TransferState }) => state.transfer.loading
export const selectTransferError = (state: { transfer: TransferState }) => state.transfer.error
export const selectTransferSuccess = (state: { transfer: TransferState }) => state.transfer.success

export default transferSlice.reducer;
