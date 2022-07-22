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
        case "name" : {
            return {
                ...state ,
                name:payload
            }
        }
        case "fullname" : {
            return {
                ...state ,
                fullname:payload
            }
        }        case "email" : {
            return {
                ...state ,
                email:payload
            }
        }        case "contactnumber" : {
            return {
                ...state ,
                contactnumber:payload
            }
        }        case "departurecity" : {
            return {
                ...state ,
                departurecity:payload
            }
        }        case "date" : {
            return {
                ...state ,
                date:payload
            }
        }
        default : {
            return state
        }
    }
  }
  
  export default function CustoemrDetailForm() {
    const[ countOfPeople,setCountOfPeople] = React.useState(1)
    const [amount,setAmount] = React.useState(0)
    const [state,dispatch] = React.useReducer(Reducer,initState)

    const postData = () => {

    }
    return (
       <>
     <Box height="69px" width="100%" backgroundColor="#2f9bdb"></Box>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex>
          <div  style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",margin:"auto", height:"100vh"}}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={4} w={'full'} maxW={'md'}>
                 <Heading fontSize={'2xl'}>Enter Your Details and Proceed To Book</Heading>
                 <FormControl id="email">
                   <Input 
                    onChange={(e)=>dispatch({type:"email",payload:e.target.value})}              
                    value={state.email}
                    type="email" placeholder="Email" />
                 </FormControl>
                 <FormControl id="fullName">
                   <Input 
                      onChange={(e)=>dispatch({type:"fullname",payload:e.target.value})}              
                      value={state.fullname}
                      type="text" placeholder="Full Name" />
                 </FormControl>
                 <FormControl id="contactNumber">
                    <Input 
                       onChange={(e)=>dispatch({type:"contactnumber",payload:e.target.value})}             
                       value={state.contactnumber}
                       type="tel" placeholder='Contact Number' />
                 </FormControl>
                 <FormControl id="departureCity" >
                    <Input 
                       onChange={(e)=>dispatch({type:"departurecity",payload:e.target.value})}              
                       value={state.departurecity}
                       type="text" placeholder="Departure City"/>
                 </FormControl>
                 <FormControl  id="numberOfPeople">
                    <Flex justifyContent="space-between">
                      <Box>
                         <Text margin="7px 0px 0px 5px">Number of People</Text>
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
                      value={state.date}
                      type="date" />
                 </FormControl>            
                 <FormControl id="bedRoomOccupancy">
                    <Text>Type Of room</Text>
                    <Input 
                      value={state.value}
                      type="radio" />
                 </FormControl>
                 <FormControl id="whatsAppUpdate">
               
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
                    <Button colorScheme={'blue'} onClick={postData} variant={'solid'}> Next </Button>
                </Stack>
              </Stack>
            </Flex>
          </div>
        </Flex>
     </Stack>
       </>
    );
  }