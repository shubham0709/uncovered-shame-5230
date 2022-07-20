import React from 'react'
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
import "../BeachComponent/beach.css"
import ImageCard from './ImageCard'

const Beach = () => {
    return (
        <div className='main-container'>
            <div className='top-cont'>
                <h1 className='beach'>Beaches</h1>
                <p className='beach para'>The crunch of white sand beneath your feet and the thundering ocean beckoning you into its cool waters. Explore all you need to know about taking a trip to the beach!</p>
            </div>
            <div className='top-beach'>
                <h1 className='beach beach-head'>Tripoto's Top Beach Picks for January, February, March 2022</h1>
                <ImageCard />
            </div>
            <div>
                <h1 className='beach beach-head' >Top Beach Properties You Need to Experience This Year</h1>
            </div>
        </div>

    )
}

export default Beach

