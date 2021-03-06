import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Cookies from "js-cookie";

export interface PrefState {
  preferences: {
    userId?: string | undefined;
    address: string;
    priceMin: Number;
    priceMax: Number;
    entryDate: string;
    checkOutDate: string;
    sizeMin: number;
    sizeMax: number;
    roomsMin: number;
    roomsMax: number;
    parking: boolean;
    porch: boolean;
    garden: boolean;
    furnished: boolean;
    elevator: boolean;
    handicapAccessible: boolean;
    petsAllowed: boolean;
    smokeAllowed: boolean;
  };
}
export const initialState: PrefState = {
  preferences: {
    userId: Cookies.get("id"),
    address: "",
    priceMin: 0,
    priceMax: 0,
    entryDate: new Date().toLocaleDateString(),
    checkOutDate: new Date().toLocaleDateString(),
    sizeMin: 0,
    sizeMax: 0,
    roomsMin: 0,
    roomsMax: 0,
    parking: false,
    porch: false,
    garden: false,
    furnished: false,
    elevator: false,
    handicapAccessible: false,
    petsAllowed: false,
    smokeAllowed: false,
  },
};
export const prefSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setPreferences: (state, { payload }: PayloadAction<PrefState>) => {
      state.preferences.address = payload.preferences.address;
      state.preferences.priceMin = payload.preferences.priceMin;
      state.preferences.priceMax = payload.preferences.priceMax;
      state.preferences.entryDate = payload.preferences.entryDate;
      state.preferences.checkOutDate = payload.preferences.checkOutDate;
      state.preferences.sizeMin = payload.preferences.sizeMin;
      state.preferences.sizeMax = payload.preferences.sizeMax;
      state.preferences.roomsMin = payload.preferences.roomsMin;
      state.preferences.roomsMax = payload.preferences.roomsMax;
      state.preferences.parking = payload.preferences.parking;
      state.preferences.porch = payload.preferences.porch;
      state.preferences.garden = payload.preferences.garden;
      state.preferences.furnished = payload.preferences.furnished;
      state.preferences.elevator = payload.preferences.elevator;
      state.preferences.handicapAccessible =
        payload.preferences.handicapAccessible;
      state.preferences.petsAllowed = payload.preferences.petsAllowed;
      state.preferences.smokeAllowed = payload.preferences.smokeAllowed;
    },
  },
});

export const prefReducer = prefSlice.reducer;
export const { setPreferences } = prefSlice.actions;
export const prefSelectors = (state: RootState) => state.prefReducer;
