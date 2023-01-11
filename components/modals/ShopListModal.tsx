import { closeModal, updateAmount } from "@/store"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import styles from '@/styles/components/Layout.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Work_Sans } from "@next/font/google";
import { ShopItem } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";

const workSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const listBoolean = useSelector((state:any) => state.listIsOpen)
    const shoppingList = useSelector((state:any) => state.shopList)
    const logStore = useSelector((state: any) => state.login)

    const checkoutHandler = async () => {
        console.log(shoppingList.shopList.length > 0)
        if (shoppingList.shopList.length > 0) {
            const list = [
                {
                    id: 'puppy_pet',
                    count: 3
                },
                {
                    id: 'kitty_pet',
                    count: 5
                }
            ]
            dispatch(closeModal())
            router.push('/checkout')
        }
    }

    return (
        <Dialog as="div" open={listBoolean.open} className={`${styles.shoppingList_container} ${workSans.className}`} onClose={() => dispatch(closeModal())}>
            <div className={styles.bg} />
            <div className={styles.wrapper}>
            <div className={styles.container}>
                <Dialog.Panel className={styles.modal}>
                    <Dialog.Title as="h3" className="">Shopping List</Dialog.Title>
                    <div className={styles.shoppingList}>
                    {shoppingList.shopList.length > 0 ?
                        <div className={styles.list}>
                            {shoppingList.shopList.map((item:ShopItem) => (
                                <div className={styles.item} key={item.id}>
                                    <h3>{item.name}</h3>
                                    <input type={'number'} min={0} defaultValue={shoppingList.shopList.find((i:ShopItem) => i.id === item.id)?.count} onChange={(event) => {
                                        const {value} = event.target
                                        dispatch(updateAmount({'item': {id: item.id}, value: value}))
                                    }}/>
                                </div>
                            ))}
                        </div>
                        :
                        <div className={styles.noItems}>
                        <p>No Items Found</p>
                        </div>
                    }
                    </div>

                    <div className={styles.buttons_container}>
                    <button type="button" className={styles.cancel} onClick={() => dispatch(closeModal())}>
                        Cancel
                    </button>
                    <button type="button" className={styles.confirm} onClick={checkoutHandler}>
                        Checkout
                    </button>
                    </div>
                </Dialog.Panel>
            </div>
            </div>
        </Dialog>
    )
}