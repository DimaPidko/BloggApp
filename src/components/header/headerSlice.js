import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameOfBloggUser: 'Dima Pidko',
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        getName(state) {
            return state.nameOfBloggUser;
        },
    },
});

const { actions, reducer } = headerSlice;

export default reducer;
export const { getName } = actions;
