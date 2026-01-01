import { createAsyncThunk,createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getContactsAPI, createContactAPI, updateContactAPI,deleteContactAPI, type Contact } from "~/api/modules/Contacts";
import type { rootState } from "../reduxStore";

interface ContactState {
    contactsList: Contact [];
    loading: boolean;
    errorMenssage: string;
}

const initialState: ContactState = {
    contactsList:[],
    loading:false,
    errorMenssage:"",
};

export const fetchContacts = createAsyncThunk(
    'contact/fetchAll',
    async (_, { rejectWithValue }) =>{
        const response = await getContactsAPI ();
        if (response.errors && response.errors.length > 0){
            return rejectWithValue(response.errors[0].error);
        }
    return response.data;
    }   
);

export const addContact = createAsyncThunk(
    'contact/create',
    async (newContact: Contact, { dispatch, rejectWithValue }) => {
        try {
            const response = await createContactAPI(newContact);
       
            if (response.errors && response.errors.length > 0) {
                return rejectWithValue(response.errors[0].error);
            }

            dispatch(fetchContacts());
            return response.data;
        } catch (error: any) {
            
            const message = error.response?.data?.message || "La cuenta no existe o es inválida";
            return rejectWithValue(message);
        }
    }
)
export const updateContact = createAsyncThunk(
    'contact/update',
    async ({ id, contact }: { id: string; contact: Contact }, { dispatch, rejectWithValue }) => {
            const response = await updateContactAPI(id, contact);
            
            if (response.errors && response.errors.length > 0) {
                return rejectWithValue(response.errors[0].error);
            }

            dispatch(fetchContacts());
            return response.data;
        }
);

export const deleteContact = createAsyncThunk(
    'contact/delete',
    async (id: string, { dispatch, rejectWithValue }) =>{
        const response = await deleteContactAPI(id);
        if (response.errors && response.errors.length>0){
            return rejectWithValue(response.errors[0].error);
        }
        dispatch(fetchContacts());
        return id;
    }
);

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        clearContactError: (state) => { state.errorMenssage = ""; }
    },
    extraReducers:(builder) =>{
        builder
            .addCase(fetchContacts.pending, (state) =>{
                state.loading = true;
            })
            .addCase (fetchContacts.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.contactsList = Array.isArray(action.payload) ? action.payload : action.payload.data || [];
            })
            .addCase(updateContact.pending, (state) =>{
                state.loading = true;
                state.errorMenssage = "";
            })
            .addCase(updateContact.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(updateContact.rejected, (state, action)=>{
                state.loading = false;
                state.errorMenssage = action.payload as string || "Error al actualizar el contacto";
            })
            .addCase(deleteContact.pending, (state) =>{
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state) =>{
                state.loading = false;
            })
            .addCase(deleteContact.rejected, (state,action) =>{
                state.loading = false;
                state.errorMenssage = action.payload as string || "Error al eliminar el contacto";
            })
            
            .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.errorMenssage = action.payload as string || "Error al cargar contactos";
            });
    },
});

export const {clearContactError} = contactSlice.actions;
export const selecContacts = (state: {contact: ContactState}) => state.contact.contactsList;
export const selecContactLoading = (state: {contact: ContactState}) => state.contact.loading;

export default contactSlice.reducer;