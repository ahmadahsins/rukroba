import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#EBAE35] w-full h-32 pt-6 gap-3 font-medium'>
            <div className="flex items-center gap-1">
                <Link href={"https://instagram.com/rukroba?igshid=d3lldnFpZzBidHRp"} target="_blank">
                    <FaInstagram size={24} />
                </Link>
                Our Instagram
            </div>
            <p className=''>© 2023 Rukroba. All Rights Reserved.</p>
        </div>
    )
}

export default Footer