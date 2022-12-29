import Image from "next/image"
import styles from "@/styles/components/Profile.module.css"
import { useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { useDispatch } from "react-redux"
import { loginOpen, logout } from "@/store"

export default () => {
    const logStore = useSelector((state: any) => state.login)
    const dispatch = useDispatch()
    // console.log(logStore)
    return (

        <>
            {
                logStore.logged ? 
                <button className={styles.container} onClick={() => dispatch(logout())}>
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