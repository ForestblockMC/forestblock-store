import React from "react";
import Stripe from "stripe";

export type CartContextProps = {
    items?: Stripe.Price[];
    remove?: (id: string) => void;
    add?: (item: Stripe.Price) => void;
}

const cartContextProps: CartContextProps = {};

const CartContext = React.createContext(cartContextProps);
export default CartContext;