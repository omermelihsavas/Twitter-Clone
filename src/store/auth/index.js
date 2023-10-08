import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'username',
        fullName: 'fullName',
        avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    },
    accounts: [
        {
            id: 1,
            username: 'username',
            fullName: 'fullName',
            avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
        },
        {
            id: 2,
            username: 'username2',
            fullName: 'fullName2',
            avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
        }
    ]
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state,action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state,action) => {
            state.currentAccount = action.payload
        }
    }
});

export const { _addAccount, _removeAccount, _setCurrentAccount} = auth.actions;
export default auth.reducer;