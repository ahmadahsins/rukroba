import Image from 'next/image'

const Card = ({ image, title, text }) => {
    return (
        <div class="flex flex-col gap-2 w-full md:w-96 p-6 bg-gradient-to-r md:bg-gradient-to-b from-amber-700 to-yellow-600 text-white rounded-lg shadow">
            <h3 className='font-bold text-xl md:text-2xl mb-1 md:mb-3 text-center'>{title}</h3>
            <div className='md:h-52 overflow-hidden rounded-lg'>   
                <Image src={image} className='w-full h-full object-cover hover:scale-105 transition-all duration-300' width={600} height={600} />
            </div>
            <p className='text-justify'>{text}</p>
        </div>
    )
}

export default Card