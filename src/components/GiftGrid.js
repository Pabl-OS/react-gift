import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifts';



export const GiftGrid = ({category}) => {

   const {data} = useFetchGifts(category);
    
    return (
        <>
        <h2>{ category }</h2>
      
        <div className="card-grid">
            {    
                data.map( img  => (
                <GifGridItem 
                    key = {img.id}
                    { ...img }/>
                ))
               
            }
         </div >
         </>
    )
}
