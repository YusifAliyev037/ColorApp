
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorGroup: [],
    colorHome: []
};

const colorSlice = createSlice({
    name: "colorSlice",
    initialState,
    reducers: {
        addColor: (state, action) => {
            state.colorGroup = [action.payload, ...state.colorGroup];
        },
        setColorHome: (state, action) => {
            state.colorHome = action.payload;
        },
        
        clearColorGroup: (state) => {
            state.colorGroup = [];
          },
    }
});

export const { addColor, setColorHome,clearColorGroup } = colorSlice.actions;

export default colorSlice.reducer;
