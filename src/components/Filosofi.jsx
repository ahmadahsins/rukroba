import React from 'react'
import Card from './Card'
import { filosofiArah, filosofiAnakTangga, filosofiMotifRumah } from '@/constants'

const Filosofi = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8 pt-24'>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold bg-clip-text bg-gradient-to-br from-amber-900 to-yellow-600 text-transparent'>Filosofi Rumoh Krong Bade</h1>
            <div className='flex flex-col md:flex-row gap-3 md:gap-10 px-2'>
                <Card image={filosofiArah.image} title={filosofiArah.title} text={filosofiArah.text} />
                <Card image={filosofiAnakTangga.image} title={filosofiAnakTangga.title} text={filosofiAnakTangga.text} />
                <Card image={filosofiMotifRumah.image} title={filosofiMotifRumah.title} text={filosofiMotifRumah.text} />
            </div>
        </div>
    )
}

export default Filosofi