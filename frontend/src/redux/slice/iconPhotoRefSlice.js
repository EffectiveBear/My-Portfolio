import { createSlice } from "@reduxjs/toolkit";

const iconPhotoRefSlice = createSlice({
  name: "iconPhotoRef",
  initialState: {
    iconPhotoRef: null,
  },
  reducers: {
    setIconPhotoRef: (state, action) => {
        state.iconPhotoRef = action.payload
    },
  },
});
export const {setIconPhotoRef} = iconPhotoRefSlice.actions;
export default iconPhotoRefSlice.reducer;
