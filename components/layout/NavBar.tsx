import React from 'react'
import {RiApps2Fill} from 'react-icons/ri'
import {MdShoppingCart} from 'react-icons/md'
import {IoMdTrophy} from 'react-icons/io'
import {HiMap} from 'react-icons/hi'
import {HiNewspaper} from 'react-icons/hi'
import { useRouter } from 'next/router'
import styles from '@/styles/components/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import BottomNav from './BottomNav'

export default () => {
    const router = useRouter()
    const [menu, setMenu] = React.useState('false')


    const toggleMenu = () => {
        if (menu === 'false') {
            setMenu('true')
        } else {
            setMenu('false')
        }
    }
    const buttonList = buttons.map(button => {
      const active = button.text.toLowerCase() === "shop" ? ' ' + styles['active' ]: ''
      return (
          <div className={styles.button + active} key={button.text.toLowerCase()}>
              <Link href={`${button.link}`}>
                  <button.icon/> {button.text.toUpperCase()}
              </Link>
          </div>
      )
    })

    return (
        <nav className={styles.container}>
          <div className={styles.wrapper}>
            <section className={styles.section1}>
                <Link href="/" className={styles.logo_container}>
                    <span id={styles.logo__text1}>Forest</span>
                    <span id={styles.logo__text2}>Block</span>
                </Link>
                <div className={styles.buttons}>
                    {buttonList}
                </div>
                <button className={`${styles.toggle} ${styles[menu]}`} onClick={toggleMenu}>
                  <div id={`${styles.top_bar}`} />
                  <div id={styles.mid_bar}/>
                  <div id={styles.bot_bar}/>
                </button>
            </section>
            <section className={`${styles.section2} ${styles[menu]}`}>
              {buttonList}
            </section>
          </div>
            <BottomNav/>
        </nav>
    )
}

const buttons = [
    {
      icon: RiApps2Fill,
      text: "Home",
      link: "https://forestblock-web.vercel.app/"
    },
    {
      icon: HiNewspaper,
      text: "News",
      link: "https://forestblock-web.vercel.app/"
    },
    {
      icon: MdShoppingCart,
      text: "Shop",
      link: "/"
    },
    {
      icon: IoMdTrophy,
      text: "Leaderboard",
      link: "https://forestblock-web.vercel.app/"
    },
    {
      icon: HiMap,
      text: "Map",
      link: "https://forestblock-web.vercel.app/"
    },
  ]