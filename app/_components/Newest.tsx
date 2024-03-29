import React from 'react'
import {client} from "@/app/lib/sanity"
import { simplifiedProduct } from '../interface'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NewestProduct from './NewestProduct'


async function getData(){
    const query=`
    *[_type=="product"][0...4] | order(_createdAt desc){
        _id,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name,
        "imageUrl":images[0].asset->url
      }
    `

    const data=await client.fetch(query)
    return data
}

export default async function Newest() {
    const data:simplifiedProduct[]=await getData()
  return (
    <div className='bg-white mt-20 lg:mt-12'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-between'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Our Newest Products</h2>
                <Link href='/all' className='text-primary flex items-center gap-x-1'>
                    See all{" "}
                    <span>
                        <ArrowRight/>
                    </span>
                </Link>
            </div>

            <NewestProduct data={data}/>
        </div>
    </div>
  )
}
