import Image from "next/image"
import styles from "@/styles/components/inner/Profile.module.css"
import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { useDispatch } from "react-redux"
import { loginOpen, logout, resetList } from "@/store"

export default () => {
    const logStore = useSelector((state: any) => state.login)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        dispatch(resetList())
    }
    return (

        <>
            {
                logStore.logged ? 
                <button className={styles.container} onClick={logoutHandler}>
                    <Image src={logStore.data.avatar} title={logStore.data.username} width={50} height={50} alt={`${logStore.data.username} profile`}/>
                </button>
                :
                <button className={styles.container} onClick={() => dispatch(loginOpen())}>
                    Login
                </button>
            }
        </>
    )
}