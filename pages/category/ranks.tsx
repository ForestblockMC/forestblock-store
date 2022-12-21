import Layout from "@/components/layout/Layout"
import Stripe from "stripe"
import { GetServerSideProps, NextPage } from "next"
import RankModules from "@/components/ranks/RanksModule"
import styles from "@/styles/pages/Ranks.module.css"
import React from "react"

// export const getServerSideProps: GetServerSideProps = async(context) => {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//         apiVersion: '2022-11-15'
//     })

//     const response = await stripe.prices.list({
//         limit: 10,

//         expand: ['data.product'],
//     })
//     return {
//         props: {
//             prices: response.data
//         }
//     }
// }

export interface RanksProps {
    stripe: Stripe
    prices: Stripe.Price[]
}
const Ranks: NextPage<RanksProps> = ({prices}) => {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, [])
    return (
        <Layout name='Ranks Page'>
            <div className={styles.container}>
                <div className={styles.rank_sections}>
                    <div className={styles.rank_sections_inner}>
                        <div className={styles.rank_sections_header}/>
                        <div className={styles.rank_sections_body}>
                            {ranksDetails.map((rank, index) => (
                                <span key={index}>{rank}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.rank_sections_details}>
                    {ranks.map((rank, index) => (
                        <RankModules key={index} {...rank}/>
                    ))}
                </div>
            </div>
            <div></div>
        </Layout>
    )
}

export default Ranks;

const ranks = [
    {   
        id: "price_1MFK6jIrTMoDh073OL8mOkqP",
        name: "vip",
        customName: "vip",
        price: 9.99,
        logo: "/images/ranks/vip.jpeg",

        perks: {
            // socials
            chatColor: "Yellow",
            prefix: "",
            chatTag: "",
            vipSection: true,
            notWhenJoined: true,
            customNotWhenJoined: false,
            
            // recurring rewards
            dailyCrates: '2x',
    
            //cosmetics
            islandFlight: true,
            itemSkins: true,
            renameItems: true,
            renamePets: true,
            customUsernames: false,
            emojis: true,
    
            // perks
            sneakpeaks: true,
            enderchestSlots: 36,
            wardrobesSlots: 9,
            tpaCoolDown: 5,
            spawnCooldown: 5,
        }
    },
    {
        id: "price_1MFOcxIrTMoDh0736tzwVPTb",
        name: "vipplus",
        customName: "vip+",
        price: 19.99,
        logo: "/images/ranks/vipplus.jpg",
        perks: {
            // socials
            prefix: "",
            chatColor: "Gold",
            chatTag: "",
            vipSection: true,
            notWhenJoined: true,
            customNotWhenJoined: true,
            
            // recurring rewards
            dailyCrates: '4x',
    
            //cosmetics
            islandFlight: true,
            itemSkins: true,
            renameItems: true,
            renamePets: true,
            customUsernames: true,
            emojis: true,
    
            // perks
            sneakpeaks: true,
            enderchestSlots: 54,
            wardrobesSlots: 18,
            tpaCoolDown: 1,
            spawnCooldown: 1,

        }
    },
]

const ranksDetails = [
    "Username Color",
    "Custom Prefix",
    "Chat Tag",
    "Notification Upon Joining",
    "Daily Crates",
    "Island Flight",
    "Custom Item Skins",
    "Custom Item Names",
    "Custom Pet Names",
    "Custom Username",
    "Custom Emojis",
    "Sneakpeaks",
    "Enderchest Slots",
    "Wardrobe Slots",
    "TPA Cooldown (/tpa)",
    "Spawn Cooldown (/spawn)",
]