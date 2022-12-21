export interface ShopItem {
    id: string
    name: string
    price: number
    count: number
}
export interface ActionItem {
    payload: {
        item: ShopItem
    }
}