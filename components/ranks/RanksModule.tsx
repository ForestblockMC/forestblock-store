import React, { FC } from "react";
import styles from "@/styles/components/RankModules.module.css";
import Stripe from "stripe";
export interface RankModulesProps {
    id: string;
    name: string;
    price: Stripe.Price[];
    // socials
    chatColor: string,
    chatTag: string,
    vipSection: boolean,
    notWhenJoined: boolean,
    customNotWhenJoined: boolean,
    
    // recurring rewards
    dailyCrates: string,

    //cosmetics
    islandFlight: boolean,
    itemSkins: boolean,
    renameItems: boolean,
    renamePets: boolean,
    customUsernames: boolean,

    // perks
    sneakpeaks: boolean,
    enderchestSlots: number,
    wardrobesSlots: number,

}
const RankModules:FC<RankModulesProps> = (props) => {
    const price = props.price.find((price) => price.id === props.id);
    return (
        <div className={styles.container}>
            {props.name}
            <br/>
            {price?.unit_amount as number / 100}$
        </div>
    )
};

export default RankModules;