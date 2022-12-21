import Link from "next/link"
import styles from "@/styles/components/BottomNav.module.css"
import { useRouter } from "next/router"
import { useState } from "react"
import { Listbox } from "@headlessui/react"
import {TbSelector} from "react-icons/tb"
import Profile from "./Profile"
import { useDispatch ,useSelector } from "react-redux"
import { openModal } from "@/store/index"
export default () => {
    const [currentCurrency, setCurrentCurrency] = useState(currency[0])

    const dispatch = useDispatch()
    const router = useRouter()

    const buttonMap = storeButtons.map((button, index) => {
        const route = router.pathname.split('/').length > 2 ? router.pathname.split('/')[2] : 'featured'
        const active = route === button.name.toLowerCase() ? styles["active"] : "";
        return (
                <Link href={`${button.link}`} key={index} className={active}>
                    <p>{button.name.toUpperCase()}</p>
                </Link>
        )
    })

    const CurrencySelector = () => (
        <Listbox value={currentCurrency} onChange={setCurrentCurrency}>
            <Listbox.Button className={styles.currency}>
                <span>{currentCurrency.type}</span>
                <span><TbSelector/></span>
            </Listbox.Button>
            <Listbox.Options className={styles.currencyOptions}>
                {currency.map((currency, index) => (
                    <Listbox.Option key={index} value={currency}>
                        {currency.type}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper1}>
                    <h1>Forestblock Store</h1>
                    <div>
                        {buttonMap} 
                    </div>
                </div>
                <div className={styles.wrapper2}>
                    <Profile/>
                    <div>
                        <CurrencySelector/>
                    </div>
                    <div>
                        <button onClick={() => dispatch(openModal())}>Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const storeButtons = [
    {
        name: "Featured",
        link: "/",
    },
    {
        name: "Ranks",
        link: "/category/ranks",
    },
    {
        name: "Crates",
        link: "/category/crates",
    },
    {
        name: "Boosters",
        link: "/category/boosters",
    }
]

const currency = [
    {
        type: "USD",
    },
    {
        type: "EUR",
    },
    {
        type: "GBP",
    },
    {
        type: "CAD",
    },
    {
        type: "AUD",
    },
]