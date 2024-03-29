"use client"
import { useEffect, useRef } from 'react'
import { MotionDiv } from '../framer'
import Link from 'next/link'
import { simplifiedProduct } from '../interface'
import Image from 'next/image'
import { useInView,useAnimation} from 'framer-motion'

interface NewestProductProps {
    data: simplifiedProduct[];
}

export default function NewestProduct({data}:NewestProductProps) {
    const ref=useRef(null)
    const isInView=useInView(ref,{once:true})

    const mainControls=useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])
  return (
         <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
            ref={ref}
                >
                {
                    data.map((product:simplifiedProduct,index)=>(
                        <MotionDiv key={product._id} className='group relative'
                        variants={{
                            hidden:{opacity:0,scale: 0.9,},
                            visible:{opacity:1,scale: 1,},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ delay:0.6+ 0.35 * index }}
                        >
                            <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                                <Image src={product.imageUrl} alt={product.name} width={300} height={300} 
                                className='w-full h-full object-cover object-center lg:h-full lg:w-full'/>
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm text-gray-900'>
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
   
  )
}
