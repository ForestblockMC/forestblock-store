import { openModal } from "@/store"
import { BsCartFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import styles from '@/styles/components/inner/Cart.module.css'

export default () => {
    const dispatch = useDispatch()
    const shoppingList = useSelector((state:any) => state.shopList)
    const logStore = useSelector((state: any) => state.login)
    return (
        <>
            {logStore.logged ? 
                <button className={styles.container} onClick={() => dispatch(openModal())}><BsCartFill/> <div>{shoppingList.shopList.length > 0 ? `(${shoppingList.shopList.length})` : 'Cart'}</div></button>
            :
                ""
            }
            
        </>
    )
}