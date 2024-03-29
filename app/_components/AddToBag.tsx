'use client'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
export interface ProductCart{
    name:string,
    description:string,
    price:number,
    currency:string,
    image:any,
    price_id:string
}
export default function AddToBag({currency,description,name,price,image,price_id}:ProductCart) {
    const {addItem,handleCartClick}=useShoppingCart()
    const product={
        name:name,
        description:description,
        price:price,
        image:urlFor(image).url(),
        currency:currency,
        price_id:price_id
    }
  return (
    <button onClick={()=>{addItem(product);handleCartClick()}} className="px-8 py-2 rounded-md bg-primary text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-primary"> 
        Add to Bag
    </button>
  )
}
