import {createSlice} from "@reduxjs/toolkit";  

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isHomePage: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        
        gotoHomePage: (state) => {
            state.isHomePage = !state.isHomePage;
        },
        setHomePage: (state) => {
            state.isMenuOpen = true;
        },

    }
});

export const {toggleMenu, closeMenu, gotoHomePage, setHomePage} = appSlice.actions;
export default appSlice.reducer;