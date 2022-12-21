import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Work_Sans} from '@next/font/google'
import Stripe from 'stripe'
import { Provider} from 'react-redux'
import store from '@/store/index'

const OpenSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
  )
}
