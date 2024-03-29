import Link from "next/link"
import { MotionDiv } from "../framer"
import { simplifiedProduct } from "../interface"
import { client } from "../lib/sanity"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

async function getData(category:string) {
    const query=`*[_type=="product" && category->name=="${category}"]{
        _id,
        "imageUrl":images[0].asset->url,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name
    }`

    const data=await client.fetch(query)
    return data

}

export default async function CategoryItem({params}:{params:{category:string}}) {
    const data:simplifiedProduct[]=await getData(params.category)
  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-between'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>{params.category}'s Products</h2>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {
                    data.map((product,index)=>(
                        <MotionDiv key={product._id} className='group relative'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3+index * 0.3}}
                        >
                            <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                                <Image src={product.imageUrl} alt={product.name} width={300} height={300} 
                                className='w-full h-full object-cover object-center lg:h-full lg:w-full'/>
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm text-gray-900 uppercase'>
                                        <Link href={`/product/${product.slug}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-600'>
                                        {product.categoryName}
                                    </p>
                                </div>
                                <p className='text-sm font-medium text-gray-900'>${product.price}</p>
                            </div>
                        </MotionDiv>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
