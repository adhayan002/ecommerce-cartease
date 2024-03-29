"use client"
import { urlFor } from "../lib/sanity"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface iAppProps{
    images:any
}

export default function ImageGallery({images}:iAppProps) {
  return (
    <div>
      <Carousel className="w-full px-10 lg:w-3/4 lg:px-0">
        <CarouselContent>
          {images.map((image: any, index:any) => (
            <CarouselItem key={index}>
                <div className="p-1">
                    <Card>
                        <CardContent className="h-1/4 flex items-center justify-center p-6">
                            <Image src={urlFor(image).url()} alt="product photo" width={300} height={300}
                            className="h-full w-full object-cover object-center cursor-pointer"/>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

    </div>
  )
}
