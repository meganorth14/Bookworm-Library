import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../app/localStorage'

const persistedState = loadState();

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: persistedState && persistedState.user ? 
        persistedState.user.value
        :{
            user_id: -1,
            username: "",
            first_name: "",
            last_name: "",
            role_type: null,
        } 
        
    },
    reducers: {
        signin: (state, action) => {
            //update state with user info
            state.value = {
                user_id: action.payload.user_id,
                username: action.payload.username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                role_type: action.payload.role_type,
            }
        },
        signout: (state) => {
            //remove user info
            state.value = {
                user_id: -1,
                username: "",
                first_name: "",
                last_name: "",
                role_type: null,

            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { signin, signout } = loginSlice.actions

export default loginSlice.reducer