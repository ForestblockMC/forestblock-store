import {Action, configureStore, createSlice} from '@reduxjs/toolkit'
import {ShopItem, ActionItem} from '@/types'
import { stat } from 'fs'
const shopListArray: ShopItem[] = []
const shopListSlice = createSlice({
    name: 'shopList',
    initialState: {
        shopList: shopListArray
    },
    reducers: {
        addShop(state, action: ActionItem) {
            if (state.shopList.find(item => item.id === action.payload.item.id)) {
                const num = state.shopList.find(i => i.id === action.payload.item.id)!.count as number
                const integer = num + 1
                state.shopList.find(i => i.id === action.payload.item.id)!.count = integer
                return
            }
            state.shopList.push(action.payload.item)
        },
        removeShop(state, action: ActionItem) {
            state.shopList = state.shopList.filter(item => item.id !== action.payload.item.id)
        },
        updateAmount(state, action: any) {
            const num = parseInt(action.payload.value)
            if (num == 0) {
                state.shopList = state.shopList.filter(item => item.id !== action.payload.item.id)
                return;
            }
            state.shopList.find(i => i.id === action.payload.item.id)!.count = num
        },
        resetList(state) {
            state.shopList = []
        }

    }
})
const shopPrice = createSlice({
    name: 'shopPrice',
    initialState: {
        type: 'USD',
        sign: '$'
    },
    reducers: {
        changePrice(state, action) {
            state.type = action.payload.type
            state.sign = action.payload.sign
        }
    }
})
const loginFactor = createSlice({
    name: "login",
    initialState:{
        logged: false,
        data: {
            username: "",
            uuid: "",
            avatar: ""
        }
    },
    reducers: {
        login(state, action) {
            state.logged = true
            state.data = {
                username: action.payload.data.username,
                uuid: action.payload.data.uuid,
                avatar: action.payload.data.avatar
            }
        },
        logout(state) {
            state.logged = false
            state.data = {
                username: "",
                uuid: "",
                avatar: ""
            }
        }
    }    
})

const shopModalList = createSlice({
    name: 'shopModalList',
    initialState: {
        open: false,
    },
    reducers: {
        openModal(state) {
            state.open = true
        },
        closeModal(state) {
            state.open = false
        }
    }
})
const loginpModalPanel = createSlice({
    name: 'loginModalPanel',
    initialState: {
        open: false,
    },
    reducers: {
        loginOpen(state) {
            state.open = true
        },
        loginClose(state) {
            state.open = false
        }
    }
})

const store = configureStore({
    reducer: {
        shopList: shopListSlice.reducer,

        shopPrice: shopPrice.reducer,
        login: loginFactor.reducer,

        // Modals
        listIsOpen: shopModalList.reducer,
        loginIsOpen: loginpModalPanel.reducer,
    },

})


export const {addShop, removeShop, updateAmount, resetList} = shopListSlice.actions
export const {changePrice} = shopPrice.actions
export const {login, logout} = loginFactor.actions

export const {openModal, closeModal} = shopModalList.actions
export const {loginOpen, loginClose} = loginpModalPanel.actions

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store