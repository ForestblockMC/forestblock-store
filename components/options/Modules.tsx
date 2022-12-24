import Link from "next/link";
import { FC } from "react";
import styles from "@/styles/components/Modules.module.css";

export interface ModuleProps {
    name: string;
    link: string;
    image: string;
    sale?: boolean;
}
const Modules: FC<ModuleProps> = ({name,link, image, sale = false}) => {
    return (
        <Link href={link} className={styles.container}>
            {sale && <div className={styles.sale}>Sale</div>}
            <div className={`${styles.img} ${styles[name.toLowerCase()]}`}/>
            <p>{name}</p>
        </Link>
    )
};

export default Modules;