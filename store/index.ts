import {configureStore, createSlice} from '@reduxjs/toolkit'
import {ShopItem, ActionItem} from '@/types'
const shopListArray: ShopItem[] = []
const shopListSlice = createSlice({
    name: 'shopList',
    initialState: {
        shopList: shopListArray
    },
    reducers: {
        addShop(state, action: ActionItem) {
            if (state.shopList.find(item => item.id === action.payload.item.id)) {
                return
            } else {
                state.shopList.push(action.payload.item)
            }
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
const store = configureStore({
    reducer: {
        shopList: shopListSlice.reducer,
        listIsOpen: shopModalList.reducer,
        shopPrice: shopPrice.reducer
    },
})



export const {addShop, removeShop} = shopListSlice.actions
export const {openModal, closeModal} = shopModalList.actions
export const {changePrice} = shopPrice.actions

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store