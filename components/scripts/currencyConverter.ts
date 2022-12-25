import axios from "axios"
import {env} from "process"

export default async (price:number, store:any) => {
    const api = 'https://v6.exchangerate-api.com/v6/e0509ede15a365e4c33a1c35/latest/USD';
    const {data} = await axios.get(api)
    let toRate:number = data.conversion_rates[store.type]
    const result = (toRate * price) / 100
    return result
}