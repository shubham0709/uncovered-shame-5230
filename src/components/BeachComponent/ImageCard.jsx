import React from 'react'
import '../BeachComponent/beach.css'
import { imageData } from './data'

export const ImageCard = () => {
    return (
        <div className='top-beach-cont'>
            {
                imageData.map((el ,index) => (
                    <div key={index}>
                        <img src={el.img} alt="" className='top-img' />
                        <h1 className='beach card-text '>{el.text}</h1>
                        <span>By&nbsp;&nbsp;<h3 className='author-text'> {el.author}</h3></span>
                    </div>
                ))
            }
        </div>
    )
}
