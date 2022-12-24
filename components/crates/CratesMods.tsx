import Link from "next/link"
import { FC } from "react"
import styles from '@/styles/components/CratesMods.module.css'

export interface CratesModsProps {
    name: string;
    link: string;
    image: string;
}

const CratesMods:FC<CratesModsProps> = (props) => {
    return(
        <Link href={props.link} className={styles.container}>
            <h3>{props.name}</h3>
        </Link>
    )
}

export default CratesMods