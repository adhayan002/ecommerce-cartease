
import AddToBag from '@/app/_components/AddToBag';
import CheckoutNow from '@/app/_components/CheckoutNow';
import ImageGallery from '@/app/_components/ImageGallery';
import { fullProduct } from '@/app/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import React from 'react'


export const dynamic="force-dynamic"

async function getData(slug:string){
    const query=`*[_type=="product"&&
    slug.current=="${slug}"][0]{
      _id,
      name,
      images,
      price,
      name,
      description,
      "slug":slug.current,
      "categoryName":category->name,
      price_id
  }`;

  const data=await client.fetch(query)
  return data
}

export default async function ProductPage({params}:{params:{slug:string}}) {

    const data:fullProduct=await getData(params.slug)


  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8 mb-2'>
            <div className='grid gap-8 md:grid-cols-2 mb-2'>
                <ImageGallery images={data.images}/>
                <div className='md:py-8'>
                  <div className='mb-2 md:mb-3'>
                    <span className='mb-0.5 inline-block text-gray-500'>{data.categoryName}</span>
                    <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{data.name}</h2>
                  </div>
                  <div className='mb-6 flex items-center gap-3 md:mb-10'>
                  <button className="gap-x-1 inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className='text-sm'>4.2</span>
                    <Star className='h-5 w-5'/>
                  </button>
                  <span className="text-sm font-medium leading-none text-muted-foreground">56 ratings</span>
                  </div>

                  <div className='mb-4'>
                    <div className='flex items-end gap-2'>
                      <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                        ${data.price}
                      </span>
                      <span className='mb-0.5 text-red-500 line-through'>
                        ${data.price+30}
                      </span>
                    </div>

                    <span className='text-sm tex-gray-500t'>Incl vat plus shipping</span>
                  </div>
                  <div className='mb-6 flex items-center gap-2 text-gray-500'>
                    <Truck className='w-6 h-6'/>
                    <span className='text-sm'>2-4 days Shipping</span>
                  </div>
                  <div className='flex gap-2.5'>
                  <AddToBag currency='USD' description={data.description} image={data.images[0]} name={data.name} price={data.price} key={data._id} price_id={data.price_id}/>
                  <CheckoutNow currency='USD' description={data.description} image={data.images[0]} name={data.name} price={data.price} key={data._id} price_id={data.price_id}/>
                  </div>
                  <h2 className='mt-8 text-xl font-bold'>Description</h2>
                  <p className='mt-2 pb-2text-base text-gray-500 tracking-tighter'>{data.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
