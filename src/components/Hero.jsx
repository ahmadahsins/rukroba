import Image from "next/image";
import { rukrobaLogoTransparent } from "@/assets";

const Hero = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row gap-3 md:gap-8 justify-center items-center">
            <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-600 text-transparent">Rukroba</h1>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-600 text-transparent">Rumoh Krong Bade</h2>
            </div>
            <Image src={rukrobaLogoTransparent} alt="Rukroba Logo" width={600} height={600} />
        </div>    
    )
}

export default Hero