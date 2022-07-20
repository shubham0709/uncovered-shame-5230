import React from 'react'
import '../BeachComponent/beach.css'

const ImageCard = () => {

    const data = [
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638203421_1582096766_img_7010_2.jpg",
            text: "MALDIVES: All You Need To Know",
            author: "Kadambari Bhatte (curlytravelmess)"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638203256_1608028918_2020_12_15.jpg",
            text: "GOA: 10 Quiet Spots For Nature Lovers",
            author: "Kanj Saurav"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638203944_53882629_414914815921828_3173255250827932737_n.jpg",
            text: "ANDAMAN: A Complete 7 Day Itinerary",
            author: "Saumiabee"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638203211_1482481434_kaul.jpg",
            text: "GOKARNA: The Only Itinerary You Need",
            author: "Prateek Dham"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638203510_1557406065_1554979521_dsc_2027.jpg",
            text: "VARKALA: Goa's Secluded Sister That We All Love",
            author: " Anshul Sharma"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638203510_1557406065_1554979521_dsc_2027.jpg",
            text: "NAGERCOIL: An Offbeat Paradise Near Pondicherry",
            author: " Sonalika Debnath"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638204031_1637718621_istock_153761009.jpg",
            text: "LAKSHADWEEP: The Hottest Indian Beach Destination For 2022",
            author: "Kadambari Bhatte (curlytravelmess)"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638204320_photo_1507525428034_b723cf961d3e.jpeg",
            text: "MAHARASHTRA: 7 Days 7 Beaches",
            author: "Krutarth"
        },
        {
            img: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1638204470_photo_1432889490240_84df33d47091.jpeg",
            text: "GUJARAT: An Untouched Beach",
            author: " Jalpa Rathod Chauhan"
        }
    ]
    return (
        <div className='top-beach-cont'>
            {
                data.map((el) => (
                    <div>
                        <img src={el.img} alt="" className='top-img' />
                        <h1 className='beach card-text '>{el.text}</h1>
                        <span>By&nbsp;&nbsp;<h3 className='author-text'> {el.author}</h3></span>
                    </div>
                ))
            }
        </div>
    )
}

export default ImageCard