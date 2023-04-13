import React from 'react'
import Logo from '../assets/triangle.png'
import {Heading , Image, Text} from '@chakra-ui/react'

function header() {
  return (
    <>
    <Image src={Logo} alt="logo" width={100} marginBottom='1rem' centerContent />
    <Heading color='white' marginBottom='1rem'>
      KeyWord Extractor
    </Heading>
    <Text fontSize={25} textAlign='center'>
      Paste your text below we will extract the keywords for you
    </Text>
    </>
  )
}

export default header
