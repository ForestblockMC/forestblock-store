import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Work_Sans} from '@next/font/google'
import Stripe from 'stripe'
import { Provider} from 'react-redux'
import store, { changePrice } from '@/store'
import { useEffect } from 'react'

const OpenSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const item = localStorage.getItem('currency')
    if (!item) {
      localStorage.setItem('currency', JSON.stringify({type:"USD", sign:"$"}))
      store.dispatch(changePrice({type:"USD", sign:"$"}))
    } else {
      const {type, sign} = JSON.parse(item)
      store.dispatch(changePrice({type, sign}))
    }
  }, [])
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
  )
}
