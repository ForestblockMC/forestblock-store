import {CratesItem} from '@/types'
import { FC } from 'react'
import { addShop } from '@/store'
import { useDispatch } from 'react-redux'

const CratesModules:FC<CratesItem> = ({id, name, image, price}) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(addShop(
            {item: {
                id: id,
                count: 1,
                name: name,
                price: price,
            }}
        ))
    }
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{price}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default CratesModules