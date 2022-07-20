import React from 'react'
import { HStack,Box,Image ,Text} from "@chakra-ui/react";

export const Card1 = ({cardData}) => {
  return (
    
<Box padding={"20px"} adding={"12px"} border="1px solid red" w="300px"
    h="350px"  textAlign={"left"}>
<Image  h="50%"   w="100%" src="https://www.bibliophilebookstore.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-28-at-1.19.42-PM.jpeg"></Image>
<Text fontSize='xl' color={"red"}>North East Indian Tour Packages </Text>    
<Text fontSize='18'
font-weight="900"
    line-height="25.7143px"
    text-transform="capitalize"
    Font being Rendered= "circularairpro-bold"
>North East Indian Tour Packages North East Indian Tour Packagess </Text> 
{/* <Text fontSize='6xl'>{cardData.category}</Text>     */}
</Box>
    
  )
}

