'use client'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
import { ProductCart } from './AddToBag'
export default function CheckoutNow({currency,description,name,price,image,price_id}:ProductCart) {
    const {checkoutSingleItem}=useShoppingCart()
    function buyNow(priceId:string){
        checkoutSingleItem(priceId)
    }
    const product={
        name:name,
        description:description,
        price:price,
        image:urlFor(image).url(),
        currency:currency,
        price_id:price_id
    }
  return (
    <button 
    onClick={()=>{
        buyNow(product.price_id)
    }} 
    className="shadow-[inset_0_0_0_2px_#000000] text-[#000000] px-4 py-2 rounded-md tracking-widest font-bold bg-transparent hover:bg-[#000000] hover:text-white dark:text-neutral-200 transition duration-200"> 
       Checkout Now
    </button>
  )
}
