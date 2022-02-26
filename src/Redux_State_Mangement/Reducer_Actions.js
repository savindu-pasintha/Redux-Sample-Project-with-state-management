import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: "user",
    initialState: {
        //pass krn data obj ek hadagatta
        value: { name: "savindu pasintha", age: "", email: "" },
        loginData: { name: "", age: "", email: "" },
        profileData: { name: "", age: "", email: "" },
        fetchAllData: [{ name: "", age: "", email: "" }]
    },
    reducers: {
        login: (state, action) => { state.value = action.payload },
        loginDataAction: (state, action) => { state.loginData = action.payload },
        profileDataAction: (state, action) => { state.profileData = action.payload },
        fetchAllDataAction: (state, action) => { state.fetchAllData = action.payload },
    }
})

//export actions to use in login.js file or we
export const { login, loginDataAction, profileDataAction, fetchAllDataAction } = userSlice.actions;
//index.js eke reducer
export default userSlice.reducer;