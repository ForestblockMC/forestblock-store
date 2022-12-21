import React, { FC } from "react";
import styles from "@/styles/components/RankModules.module.css";
import {loadStripe} from "@stripe/stripe-js";
import Stripe from "stripe";
import Image from "next/image";
import {BsFillCheckCircleFill, BsXCircle} from 'react-icons/bs'
import axios from "axios";

export interface RankModulesProps {
    id: string;
    name: string;
    customName: string;
    price: number;
    logo: string;
    
    perks: {
        'prefix': string;
        // socials
        'chatColor': string;
        'chatTag': string;
        'vipSection': boolean;
        'notWhenJoined': boolean;
        'customNotWhenJoined': boolean;
        
        // recurring rewards
        'dailyCrates': string;
    
        //cosmetics
        'islandFlight': boolean;
        'itemSkins': boolean;
        'renameItems': boolean;
        'renamePets': boolean;
        'customUsernames': boolean;
        'emojis': boolean;
    
        // perks
        'sneakpeaks': boolean;
        'enderchestSlots': number;
        'wardrobesSlots': number;
        'tpaCoolDown': number;
        'spawnCooldown': number,
    }

}
const RankModules:FC<RankModulesProps> = (props) => {
    const payHandler = async () => {
        const url = 'http://localhost:3333/api/payment/requestpayment'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.FB_API_KEY
            },
            mode: 'cors',
            
            body: JSON.stringify({
                "type": props.id
            })

        })
        const data = await response.json();
        console.log(data);
        return data;
        // return await axios.post(url, 
        // {
        //     "type": props.id
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'apikey': process.env.FB_API_KEY
        //     }
        // })
        // .then((res) => {
        //     console.log(res);
        // })
    }
    return (
        <div className={styles.container}>
            <div className={styles.rank_wrapper_header}>
                <Image className={styles.rank_img} src={props.logo} alt={`${props.name}`} width={80} height={80}/>
                <h2>{props.customName}</h2>
                <p>{props.price}</p>
                <button onClick={payHandler}>Purchase Now</button>
            </div>
            <div className={styles.rank_wrapper_details}>
                <div>{props.perks.chatColor}</div>
                <div>{props.perks.prefix}$</div>
                <div>{props.perks.chatTag}$</div>
                <div>{props.perks.notWhenJoined ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.dailyCrates}</div>
                <div>{props.perks.islandFlight ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.itemSkins ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.renameItems ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.renamePets ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.customUsernames ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.emojis ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.sneakpeaks ? <BsFillCheckCircleFill/> : <BsXCircle/>}</div>
                <div>{props.perks.enderchestSlots}</div>
                <div>{props.perks.wardrobesSlots}</div>
                <div>{props.perks.tpaCoolDown}</div>
                <div>{props.perks.spawnCooldown}</div>
            </div>
        </div>
    )
};

export default RankModules;