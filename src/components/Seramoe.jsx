"use client";

import React from 'react'
import { ruanganDalam } from '@/assets'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Center, Environment, OrbitControls, RandomizedLight } from '@react-three/drei'
import Gentong from './Gentong'

const Seramoe = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 pt-24 w-full'>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold bg-clip-text bg-gradient-to-br from-amber-900 to-yellow-600 text-transparent'>Bagian Rumoh Krong Bade</h1>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='flex justify-center px-2 w-full'>
                    <div class="flex flex-col justify-center gap-2 w-full md:w-1/2 p-6 bg-gradient-to-r md:bg-gradient-to-b from-amber-700 to-yellow-600 text-white rounded-lg shadow">
                        <h3 className='font-bold text-xl md:text-2xl mb-1 md:mb-3 text-center'>Seramoe (Ruangan Dalam)</h3>
                        <p className='text-justify'>Rumah adat krong bade dibagi menjadi tiga bagian "Seuramoe" atau serambi yang memiliki fungsi yang berbeda-beda.</p>
                        <div className='flex flex-col md:flex-row gap-3 md:gap-8'>
                            <div className='md:h-52 overflow-hidden rounded-lg'>   
                                <Image src={ruanganDalam} className='w-full h-full object-cover hover:scale-105 transition-all duration-300' width={600} height={600} />
                            </div>
                            <ul className='text-justify list-decimal'>
                                <li>
                                    <h2 className='font-semibold text-md'>Seuramoe Keue (Serambi Depan)</h2>
                                    <p className=''>Untuk menerima tamu dan bersantai</p>
                                </li>
                                <li>
                                    <h2 className='font-semibold text-md'>Seuramoe Teungah (Serambi Tengah)</h2>
                                        <p className=''>Terdiri dari kamar tidur</p>
                                </li>
                                <li>
                                    <h2 className='font-semibold text-md'>Seuramoe Likot (Serambi Belakang)</h2>
                                    <p className=''>Berisi dapur dan ruang makan</p>
                                </li>
                                <li>
                                    <h2 className='font-semibold text-md'>Seuramoe Bawah</h2>
                                    <p className=''>Untuk menyimpan barang-barang pemilik rumah, seperti alat penumbuk padi atau hasil panennya.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full md:w-1/2'> */}
                    {/* <Canvas shadows camera={{ position: [0, 0, 0], fov: 80 }}>
                        <group postion={[0, -1, 0]}>
                        <Center top>
                            <Gentong />
                        </Center>          
                        <AccumulativeShadows>
                            <RandomizedLight position={[2, 5, 5]} />
                        </AccumulativeShadows>
                        </group>
                        <OrbitControls makeDefault />
                        <Environment preset="studio" background blur={1} />
                    </Canvas> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Seramoe