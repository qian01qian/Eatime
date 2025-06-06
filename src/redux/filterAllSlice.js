import { createSlice } from '@reduxjs/toolkit';

const filterAllSlice = createSlice({
    name: "filtA",
    initialState: [],
    reducers: {
        addNumber: (state, action) => {
            const newNumbers = action.payload; // 預期是一個陣列
            const merged = new Set([...state, ...newNumbers]);
            return Array.from(merged).sort((a, b) => a - b);
        },
        removeNumber: (state, action) => {
            const numbersToRemove = action.payload; // 預期是一個陣列
            // 從現有狀態中過濾掉要移除的數字
            return state.filter((num) => !numbersToRemove.includes(num));
        }
    },
});

export const selectFiltA = (state) => state.filtA;
export const {addNumber, removeNumber} = filterAllSlice.actions;
export default filterAllSlice.reducer;