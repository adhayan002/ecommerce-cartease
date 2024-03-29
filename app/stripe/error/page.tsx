import { LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


function ErrorStripe() {
  return (
        <div className="h-screen w-screen bg-gray-50 flex items-center -mt-8">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <h2 className="text-7xl text-primary font-dark font-extrabold mb-8">Error 404</h2>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                        Sorry the payment could not be completed!
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                    <LinkIcon className="text-gray-650"/>
                    <Link href={'/'} className="text-gray-650 hover:text-primary text-xl">Go back</Link>
                    </div>
            </div>
                <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                    <Image src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" width={1000} height={1000} alt="Page not found"/>
                </div>
            
            </div>
        </div>
  )
}

export default ErrorStripe