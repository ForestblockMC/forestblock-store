import Layout from "@/components/layout/Layout"
import Stripe from "stripe"
import { GetServerSideProps, NextPage } from "next"
import RankModules from "@/components/ranks/RanksModule"

export const getServerSideProps: GetServerSideProps = async(context) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: '2022-11-15'
    })

    const response = await stripe.prices.list({
        limit: 10,
        expand: ['data.product'],
    })
    return {
        props: {
            prices: response.data
        }
    }
}

export interface RanksProps {
    prices: Stripe.Price[]
}
const Ranks: NextPage<RanksProps> = ({prices}) => {
    return (
        <Layout name='Ranks Page' news={false}>
            {ranks.map(rank => {
                return(
                    <div key={rank.id}>
                        <RankModules {...rank} price={prices}/>
                    </div>
                )
            })
            }
        </Layout>
    )
}

export default Ranks;

const ranks = [
    {   
        id: "price_1MFK6jIrTMoDh073OL8mOkqP",
        name: "vip",
        // socials
        chatColor: "",
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

        // perks
        sneakpeaks: true,
        enderchestSlots: 36,
        wardrobesSlots: 9,
    },
    {
        id: "price_1MFOcxIrTMoDh0736tzwVPTb",
        name: "vipplus",
        // socials
        chatColor: "",
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

        // perks
        sneakpeaks: true,
        enderchestSlots: 54,
        wardrobesSlots: 18,
    },
]