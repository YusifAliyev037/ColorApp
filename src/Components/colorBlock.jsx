import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

 function ColorBlock() {
    const color = useSelector(state => state.color.colorGroup)
  return (
    <Box display="flex" w='400px' flexWrap="wrap">
        {color.map((item, index)=>(
        <Box key={index} bg={item.code} border="1px solid" height='70px' w='150px' p={4} color='white'>
            {item.name}
        </Box>
        ))}
       
    </Box>
  )
}


export default ColorBlock