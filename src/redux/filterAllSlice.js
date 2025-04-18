import { createSlice } from '@reduxjs/toolkit';

const filterAllSlice = createSlice({
    name: "filtA",
    initialState: [],
    reducers: {
        addNumber: (state, action) => {
            const newNumber = action.payload;
            const merged = new Set([...state, ...newNumber]);
            state = Array.from(merged).sort(function(a, b){return a - b});
        },
        removeNumber: (state, action) => {
            state = state.filter((num) => num !== action.payload);
        }
    },
});

export const selectFiltA = (state) => state.filtA;
export const {addNumber, removeNumber} = filterAllSlice.actions;
export default filterAllSlice.reducer;