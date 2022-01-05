import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/helper'
import { useFetchGifs } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {


    const {data, loading}= useFetchGifs(  category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
    
    {loading && <p>Cargando</p>}

    <div className='card-grid'>
        {
            data.map(img =>(
                <GifGridItem key={img.id}
                {...img}/>
            ))
        }
    </div>
        
        </>
    )
}
