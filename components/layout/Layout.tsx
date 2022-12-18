import React, { FC } from 'react';
import styles from '@/styles/components/Layout.module.css';
import NavBar from './NavBar';

export interface LayoutProps {
    name: string;
    news: boolean;
    children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({name, news, children}) => {
    return (
        <>
      <NavBar/>
      <main className={styles.container}>
        <div className={styles.home}>
          {news ?? <section className={styles.feature}>
          </section>}
          <section className={styles.panel}>
            <h1>{name}</h1>
          </section>
          <section className={styles.content}>
            {children}
          </section>
        </div>
      </main>
    </>
    )
}

export default Layout;