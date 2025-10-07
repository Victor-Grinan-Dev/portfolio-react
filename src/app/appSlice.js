import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { skillsData, projectsData, certificatesData } from "./dummyData";

export const fetchSheetData = createAsyncThunk("app/fetchSheetData", async () => { //url
//   const data = await fetchGoogleSheet(url);
//   return data;
});

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: true,
    currentLang: "fi",
    isModal: false,

    skillsData : skillsData,
    projectsData : projectsData,
    certificatesData : certificatesData,

  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentLang(state, action) {
      state.currentLang = action.payload;
    },
    toggleIsModal(state) {
      state.isModal = !state.isModal;
    },

  },
  extraReducers: () => {
    
  },
});

export const { 
  setIsLoading, 
  setCurrentLang, 
  toggleIsModal, 
  togglePicModal 
} = appSlice.actions;
export default appSlice.reducer;