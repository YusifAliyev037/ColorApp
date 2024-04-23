import React from 'react'
import {Box,Stack,Button,Text} from '@chakra-ui/react'
import {useNavigate,useLocation} from "react-router-dom"
import { ROUTER } from '../Constant/router'
 function Header() {

    const navigate = useNavigate()


    const {pathname} = useLocation()

    const isActive = (p) => (pathname == p ? "orange" : "white")


  return (
    <Box 
    height="100px" 
    p="12px" 
    alignItems="center"
    display="flex" 
    justifyContent={'space-around'} 
    backgroundColor="green">
        <Text as="h1" fontSize="4xl" color="white">
           Color App
        </Text>
        

        <Stack direction='row' spacing={4} align='center' as='ul'>
  <Button  variant='ghost' color={isActive(ROUTER.HOME)} onClick={()=>navigate(ROUTER.HOME)}>
    Home
  </Button>
  <Button variant='ghost' color={isActive(ROUTER.SETTING)} onClick={()=>navigate(ROUTER.SETTING)} as="button">
    Setting
  </Button>
  </Stack> 
        </Box>
  )
}

export default Header
