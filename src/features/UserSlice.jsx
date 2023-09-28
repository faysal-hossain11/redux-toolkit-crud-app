import { createSlice } from "@reduxjs/toolkit";

import {UsersData} from '../FakeData';

const userSlice = createSlice({
    name: "users",
    initialState: {
        value: UsersData
    },
    reducers: {
        addUsers: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUsers: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        upDateUserName: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username;
                }
            })
        }
    }
});


export const {addUsers, deleteUsers, upDateUserName} = userSlice.actions;
export default userSlice.reducer;