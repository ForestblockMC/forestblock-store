import CratesMods from '@/components/crates/CratesMods'
import CratesModules from '@/components/crates/CratesModules'
import Layout from '@/components/layout/Layout'
import { CratesItem } from '@/types'
import styles from '@/styles/pages/Crates.module.css'

export default () => {

    return (
        <Layout name='Forestblock | Crates'>
            <div className={styles.container}>
                <ul>
                    {cratesExample.map((crate) => (
                        <li key={crate.id}>
                            <CratesMods {...crate} />
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

const cratesExample = [
    {
        id: "pet_crate",
        image: "",
        name: "Pets",
        link: "/category/crates/pets",
    },
    {
        id: "mount_crate",
        image: "",
        name: "Mounts",
        link: "/category/crates/mounts",
    },
    {
        id: "balloon_crate",
        image: "",
        name: "Balloons",
        link: "/category/crates/balloons",
    },
]