import { login, loginClose } from "@/store"
import { Dialog } from "@headlessui/react"
import { useDispatch, useSelector } from "react-redux"
import styles from '@/styles/components/Layout.module.css'
import { Work_Sans } from "@next/font/google";
import { useState } from "react";
import axios from "axios";

const workSans = Work_Sans({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
})

export default () => {
    const dispatch = useDispatch()
    const listBoolean = useSelector((state:any) => state.loginIsOpen)

    const [userName, setUsername] = useState("")

    const submitUsername = async (event: any) => {
        event.preventDefault();
        if (userName.length > 3) {
            const url = "https://api.forestblock.net/api/minecraft/login"
            const {data} = await axios.request({
                method: 'POST',
                url: url,
                data: {
                    "username": userName
                },
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': "6aF4er678K",
                    'Access-Control-Allow-Origin': '*',
                },
    
            }) as any

            const {username, avatar, uuid} = data
            const userData = {
                username: username,
                avatar: `https://mc-heads.net/head/${username}`,
                uuid: uuid,
            }
            console.table(userData)

            if (data.success) {
                dispatch(login({
                    logged: true,
                    data: {
                        ...userData,
                    }
                }))

                dispatch(
                    loginClose()
                )
            } else {
                dispatch(login({
                    logged: false,
                }))
                console.log("No User Found")
            }
        } else {
            console.log("Enter an username greater than 3")
        }
    }
    

    return (
        <Dialog as="div" className={`${styles.loginModal_container} ${workSans.className}`} open={listBoolean.open} onClose={() => dispatch(loginClose())}>
            <div className={styles.bg}/> 
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <Dialog.Panel className={styles.modal}>
                            <div className={styles.title}>
                                <Dialog.Title as="h2">Login</Dialog.Title>
                            </div>
                            <div className={styles.form}>
                                <h3>Please enter your username</h3>
                                <form onSubmit={submitUsername}>
                                    <div className={styles.form_input}>
                                        <label>Minecraft Java Username</label>
                                        <input className={styles.form_input_text} placeholder="Steve" type="text" onChange={(event:any) => setUsername(event.target.value)}/>
                                    </div>
                                    <button type="submit">Continue</button>
                                </form>
                            </div>
                            <div className={styles.description}></div>
                        </Dialog.Panel>
                    </div>
                </div>
        </Dialog>
    )
}