import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '@/components/layout/NavBar'
import styles from '@/styles/pages/Home.module.css'
import Modules from '@/components/options/Modules'
import Layout from '@/components/layout/Layout'

export interface StoreModuleProps {
  name: string;
  link: string;
  image: string;
  sale: boolean;
}

export default function Home() {
  return (
    <Layout name='Forestblock Store'>
      <section className={styles.featured}>
        <h3>Forestblock Store 0.0.1</h3>
        <div className={styles.featured_img}/>
      </section>
      <h2>Categories</h2>
      <ul className={styles.container}>
        {
          StoreModules.map(module => {
            const sale = module.sale ? <span className={styles.sale}>SALE</span> : null
            return(
              <li key={module.name.toLowerCase()}>
                <Modules {...module}/>
                {sale}
              </li>
            )
            })
        }
      </ul>

    </Layout>
  )
}

const StoreModules: StoreModuleProps[] = [
  {
    name: "Ranks",
    link: "/category/ranks",
    image: "/images/ranks/vipplus.jpg",
    sale: false,
  },
  {
    name: "Crates",
    link: "/category/ranks",
    image: "/ranks.png",
    sale: false,
  },
  {
    name: "Boosters",
    link: "/category/Boosters",
    image: "/ranks.png",
    sale: true,
  },
]