export interface ShopItem {
    id?: CratesItem["id"]
    name?: CratesItem["name"]
    price?: CratesItem["price"]
    image?: CratesItem["image"]
    count?: number
}

export interface ActionItem {
    payload: {
        item: ShopItem
    }
}

export interface CratesItem {
    id: string;
    name: string;
    price: number;
    image: string;
}