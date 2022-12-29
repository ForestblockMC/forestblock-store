import React, { FC, Fragment } from 'react';
import styles from '@/styles/components/Layout.module.css';
import NavBar from './NavBar';
import {Work_Sans} from '@next/font/google'
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { closeModal } from '@/store';
import Head from 'next/head';
import ShopListModal from '../modals/ShopListModal';
import LoginModal from '../modals/LoginModal';
export interface LayoutProps {
  name: string;
  children: React.ReactNode;
}
const workSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})
const Layout: FC<LayoutProps> = ({name, children}) => {
  const shoppingList = useSelector((state:any) => state.shopList)

  return (
    <>
       <Head>
          <title>{name}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          {/* <meta data-n-head="1" data-hid="og:image" name="og:image" property='og:image' content={image}/> */}
          <meta content={name} property="og:title" />
          <meta content="The #1 skill-based MMORPG minecraft server" property="og:description" />
          <meta content="https://forestblock.net" property="og:url" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/icons/favicon/android-chrome-192x192.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="./src/images/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/icons/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/icons/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="/icons/favicon/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#00a300"/>
          <meta name="msapplication-TileImage" content="/icons/favicon/mstile-144x144.png"/>
          <meta name="msapplication-config" content="/icons/favicon/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta content="#43B581" data-react-helmet="true" name="theme-color" />
          <link rel="manifest" href="/icons/manifest.json"/>
      </Head>
      <ShopListModal/>
      <LoginModal/>
      <div className={`${styles.layout_wrapper} ${workSans.className}`}>
        <NavBar/>
        <main className={styles.container}>
          <div className={styles.home}>
            <section className={styles.content}>
              {children}
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout;