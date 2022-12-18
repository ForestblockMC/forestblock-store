import Link from "next/link";
import { FC } from "react";
import styles from "@/styles/components/Modules.module.css";

export interface ModuleProps {
    name: string;
    link: string;
    image: string;
}
const Modules: FC<ModuleProps> = ({name,link, image}) => {
    return (
        <Link href={link} className={styles.container}>
            <div className={`${styles.img} ${styles[name.toLowerCase()]}`}/>
            <p>{name}</p>
        </Link>
    )
};

export default Modules;