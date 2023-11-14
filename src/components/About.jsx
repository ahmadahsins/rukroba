import React from 'react'
import KrongBade from './KrongBade'

const About = () => {
    return (
        <div className='flex flex-col md:flex-row gap-3 md:gap-8 justify-center items-center px-2'>
            <div class="flex flex-col gap-2 w-full md:w-1/2 p-6 bg-gradient-to-r md:bg-gradient-to-b from-amber-700 to-yellow-600 text-white rounded-lg shadow">
                <h3 className='font-bold text-2xl md:text-3xl mb-1 md:mb-3'>Apa itu Rukroba?</h3>
                <div className='md:hidden'>
                    <KrongBade />
                </div>
                <p className='text-justify'><span className='font-semibold'>Rumoh Krong Bade</span> merupakan rumah tradisional atau biasa disebut Rumah Adat Aceh atau Rumoh Aceh. Bangunan ini dibangun dengan bentuk panggung dan memiliki atap yang tinggi. Bentuk tersebut ditujukan untuk menghindari binatang buas dan sewaktu ada banjir air tidak masuk ke dalam rumah. <br /> <span className='font-semibold'>Rukroba</span> adalah nama dari produk kami yang berupa miniatur Rumoh Krong Bade. Miniatur ini berukuran 60 x 30 cm.</p>
            </div>
            <div className='hidden md:block'>
                <KrongBade />
            </div>
        </div>
    )
}

export default About