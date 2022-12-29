import { closeModal } from "@/store"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import styles from '@/styles/components/Layout.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Work_Sans } from "@next/font/google";
import { ShopItem } from "@/types";

const workSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default () => {
    const dispatch = useDispatch()
    const listBoolean = useSelector((state:any) => state.listIsOpen)
    const shoppingList = useSelector((state:any) => state.shopList)

    return (

        <Transition appear show={listBoolean.open}>
        <Dialog as="div" className={`${styles.shoppingList_container} ${workSans.className}`} onClose={() => dispatch(closeModal())}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className={styles.bg} />
            </Transition.Child>
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
                    <button type="button" className={styles.confirm} onClick={() => dispatch(closeModal())}>
                        Pay $130.00
                    </button>
                    </div>
                </Dialog.Panel>
            </div>
            </div>
        </Dialog>
        </Transition>
    )
}