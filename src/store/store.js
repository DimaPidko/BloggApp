'use client';

import { configureStore } from '@reduxjs/toolkit';

import headerSlice from '../components/header/headerSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action,
        });
    }
    return next(action);
};

const store = configureStore({
    reducer: { headerSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
