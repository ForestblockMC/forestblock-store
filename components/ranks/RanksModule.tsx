import React, { FC } from "react";
import styles from "@/styles/components/RankModules.module.css";
import {loadStripe} from "@stripe/stripe-js";
import Stripe from "stripe";
import Image from "next/image";
import {BsFillCheckCircleFill, BsXCircle} from 'react-icons/bs'
import axios from "axios";
import {currencyConverter} from '@/scripts'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
    const router = useRouter()
    const [price, setPrice] = React.useState<number>(0)
    const store = useSelector((state: any) => state.shopPrice)
    const payHandler = async () => {
        const url = 'http://localhost:3333/api/payment/requestpayment'
        const res = await axios.request({
            method: 'POST',
            url: url,
            data: {
                "type": props.id
            },
            
            headers: {
                'Content-Type': 'application/json',
                'apikey': "6aF4er678K",
                'Access-Control-Allow-Origin': '*',
            },

        }) 
        router.push(res.data.url)
    }
    useEffect(() => {
        currencyConverter(props.price, store).then((res) => {
            setPrice(res)
        })
    }, [store.type])
    return (
        <div className={styles.container}>
            <div className={styles.rank_wrapper_header}>
                <Image className={styles.rank_img} src={props.logo} alt={`${props.name}`} width={80} height={80}/>
                <h2>{props.customName}</h2>
                <p>{store.sign} {price.toFixed(2)}</p>
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