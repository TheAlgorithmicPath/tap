import { createSlice } from "@reduxjs/toolkit";

export const subjectsSlice = createSlice({
    name: "subjects",
    initialState: {
        DSA: [],
        CSF: [],
        LANG: [],
        PROJ: [],
    },
    reducers: {
        setDSAPages: (state, action) => {
            state.DSA = action.payload;
        },
        setCSFPages: (state, action) => {
            state.CSF = action.payload;
        },
        setLANGPages: (state, action) => {
            state.LANG = action.payload;
        },
        setPROJPages: (state, action) => {
            state.PROJ = action.payload;
        }

    }
});

export const { setDSAPages, setCSFPages, setLANGPages, setPROJPages } = subjectsSlice.actions;