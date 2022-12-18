import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Open_Sans} from '@next/font/google'
import {useState} from 'react'
import Stripe from 'stripe'
import CartContext, { CartContextProps } from '@/components/context/CartContext'

const OpenSans = Open_Sans({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Stripe.Price[]>([])

  const removeItems = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const addItem = (item: Stripe.Price) => {
    setItems([item])
  }

  const cartContext:CartContextProps = {
    items,
    remove: removeItems,
    add: addItem
  }

  return (
  <CartContext.Provider value={cartContext}>
    <main className={OpenSans.className}>
      <Component {...pageProps} />
    </main>
  </CartContext.Provider>
  )
}
