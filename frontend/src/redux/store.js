import { configureStore } from "@reduxjs/toolkit";
import iconPhotoRefSlice from "./slice/iconPhotoRefSlice";

const store = configureStore({
  reducer: {
    iconPhotoRef: iconPhotoRefSlice,
  },
});
export default store;
