import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const OverviewPackage = () => {
  return (
        <Box w="100%" border={"1px solid red"} textAlign="left">
            <Text>Experience the serenity of mountain living and revive in the property’s rustic aesthetics, fresh delicacies, and tranquil ambiance all while witnessing the beauty of nature at its finest! Tripoto’s Mindful Retreat to Mussoorie will satisfy the horror enthusiast in you as you experience a spine-chilling walk to Lambi Dehar, one of Asia’s most haunted places and visit the historical George Everest House. Located away from the bustle of city life, amidst pristine forests and meadows, come, spend a few days of peace and quiet at this quaint, cozy lodge.</Text>
          <Heading as='h2' size='lg'>The retreat comes with a free one-time rescheduling option. Let us know 72 hours ahead of the stay and pick another date as per your convenience within the next three months. </Heading>
        <Box>
            <Heading as='h4' size='md'>What you will love</Heading>
            <UnorderedList>
  <ListItem>Witnessing breathtaking panoramic views of the surrounding Himalayan mountainscapes, at this scenic offbeat property.</ListItem>
  <ListItem>Visiting the historical George Everest House - Sir George Everest’s former residence after whom the world’s tallest peak is named - that offers spectacular views of the snow-capped Himalayas and the Doon valley. </ListItem>
  <ListItem>Being a part of the ultimate eerie midnight experience by heading on a night walk to the Lambi Dehar Mines, one of Asia's topmost haunted places.</ListItem>
  <ListItem>Engaging yourself in the varied adventure activities and walks offered in and around the property.</ListItem>


  <ListItem>Relishing the freshness of Himalayan produce through the several Local Garhwali dishes offered at the lodge.</ListItem>
  <ListItem>Experiencing ‘home’ as you unwind in the simplistic old-world charm of Seegreen’s quaint log hut cabins and rustic ambiance. </ListItem>

</UnorderedList>
        </Box>
        </Box>
  )
}
