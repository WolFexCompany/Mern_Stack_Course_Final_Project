import { createSlice } from "@reduxjs/toolkit";
export const Protect_Routes = createSlice({
    name: "Protect_Routes",
    initialState: {
        WebsiteRoutes: true,
        DashboardRoutes:localStorage.getItem('SecretKey'),
        NotSignin: true,
        LoginProper: false

    },
    reducers:
    {
        LoggedIn: (state,action) => {
            state.DashboardRoutes = action.payload;
            state.NotSignin = false;
            state.LoginProper = true


        },
        LoggedOut: (state) => {
            state.DashboardRoutes = false
            state.NotSignin = true;
            state.LoginProper = false
            state.WebsiteRoutes = true
        },
        GotoDashBoard: (state) => {
            state.WebsiteRoutes = false
        }

    }
})

export const { LoggedIn, LoggedOut,GotoDashBoard } = Protect_Routes.actions;
export default Protect_Routes.reducer