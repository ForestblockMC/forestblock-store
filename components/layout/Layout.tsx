import React, { FC, Fragment } from 'react';
import styles from '@/styles/components/Layout.module.css';
import NavBar from './NavBar';
import {Work_Sans} from '@next/font/google'
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { closeModal } from '@/store/index';
export interface LayoutProps {
  name: string;
  children: React.ReactNode;
}
const OpenSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})
const Layout: FC<LayoutProps> = ({name, children}) => {
  const dispatch = useDispatch()
  const listBoolean = useSelector((state:any) => state.listIsOpen)

  const ShopListModal = () => (
    <Transition appear show={listBoolean.open}>
      <Dialog as="div" className={`${styles.shoppingList_container} ${OpenSans.className}`} onClose={() => dispatch(closeModal())}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={styles.fixed} />
        </Transition.Child>
        <div className={styles.shoppingList_wrapper}>
          <div className={styles.shoppingList_modal}>
              <Dialog.Panel className={styles.shoppingList_modal_container}>
                <Dialog.Title as="h3" className="">Shopping List</Dialog.Title>
                <div className="">
                  
                </div>

                <div className="">
                  <button
                    type="button"
                    className=""
                    onClick={() => dispatch(closeModal())}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className=""
                    onClick={() => dispatch(closeModal())}
                  >
                    Pay $130.00
                  </button>
                </div>
              </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
  return (
    <>
      <ShopListModal/>
      <div className={`${styles.wrapper} ${OpenSans.className}`}>
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