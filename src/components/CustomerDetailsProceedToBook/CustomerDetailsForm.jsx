import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,Box
  } from '@chakra-ui/react';
  import React from "react"

  const initState = {

  }
  const Reducer = (state=initState,{type,payload}) => {
    switch(type){
        default : {
            return state
        }
    }
  }
  
  export default function CustoemrDetailForm() {
    const[ countOfPeople,setCountOfPeople] = React.useState(1)
    const [amount,setAmount] = React.useState(0)
    const [state,dispatch] = React.useReducer(Reducer,initState)
    return (
       <>
     <Box height="69px" width="100%" backgroundColor="#2f9bdb"></Box>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
       
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Enter Your Details and Proceed To Book</Heading>
            
            
            <FormControl id="email">
              <Input 
                onChange={(e)=>dispatch({type:"email",payload:e.target.value})}              
                value={state.value}
                type="email" placeholder="Email" />
            </FormControl>
            <FormControl id="fullName">
              <Input 
                onChange={(e)=>dispatch({type:"fullname",payload:e.target.value})}              
                value={state.value}
                type="text" placeholder="Full Name" />
            </FormControl>
            <FormControl id="contactNumber">
              <Input 
                onChange={(e)=>dispatch({type:"contactnumber",payload:e.target.value})}             
                 value={state.value}
                type="tel" placeholder='Contact Number' />
            </FormControl>
            <FormControl id="departureCity" >
              <Input 
                onChange={(e)=>dispatch({type:"diparturecity",payload:e.target.value})}              
                value={state.value}
                type="text" placeholder="Departure City"/>
            </FormControl>
            <FormControl  id="numberOfPeople">
              <Flex justifyContent="space-between">
                <Box>
                    <Text marginTop="7px">Number of People</Text>
                </Box>
                <Flex>
                    <Button disabled={countOfPeople<2} border="1.5px solid grey"  onClick={()=>setCountOfPeople(countOfPeople - 1)}> - </Button>
                    <Text margin="10px">{countOfPeople}</Text>
                    <Button  border="1.5px solid grey" onClick={()=>setCountOfPeople(countOfPeople + 1)}> + </Button>
                </Flex>
              </Flex>
            </FormControl>
            <FormControl id="Calender">
              <Input 
                onChange={(e)=>dispatch({type:"date",payload:e.target.value})}              
                value={state.value}
                type="date" />
            </FormControl>
            
            <FormControl id="bedRoomOccupancy">
                <Text>Type Of room</Text>
              <Input 
                value={state.value}
                type="radio" />
            </FormControl>

            <FormControl id="bedRoomOccupancy">
               
              <Input 
                value={state.value}
                type="checkBox" /><Text>Send me updates for this booking on WhatsApp</Text>
              <Text>Type Of room</Text>
            </FormControl>

            <Box>
                <Flex>
                    <Text>Amount : </Text>
                    <Text>{amount}</Text>
                </Flex>
            </Box>
            <Box>
                <Text>Taxes and discounts are calculated at checkout.</Text>
            </Box>

            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Next
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
     
       </>
    );
  }