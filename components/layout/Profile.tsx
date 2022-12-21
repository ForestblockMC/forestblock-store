import Image from "next/image"
import styles from "@/styles/components/Profile.module.css"

export default () => {
    return (
        <button className={styles.container}>
            <Image src={`/me.jpg`} width={50} height={50} alt={`profile`}/>
        </button>
    )
}