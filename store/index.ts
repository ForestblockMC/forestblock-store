import {configureStore, createSlice} from '@reduxjs/toolkit'
import {ShopItem, ActionItem} from './types'
const shopList: ShopItem[] = []
const shopListSlice = createSlice({
    name: 'shopList',
    initialState: {
        shopList: shopList
    },
    reducers: {
        addShop(state, action: ActionItem) {
            if (state.shopList.find(item => item.id === action.payload.item.id)) {
                return
            }
            state.shopList.push(action.payload.item)
        },
        removeShop(state, action: ActionItem) {
            state.shopList = state.shopList.filter(item => item.id !== action.payload.item.id)
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

const store = configureStore({
    reducer: {
        shopList: shopListSlice.reducer,
        listIsOpen: shopModalList.reducer
    }
})



export const {addShop, removeShop} = shopListSlice.actions
export const {openModal, closeModal} = shopModalList.actions

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store