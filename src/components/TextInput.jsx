import { useState } from "react"
import { Textarea, Button } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react';

function TextInput({ extractKeywords }) {

  const [text, setText] = useState('');

  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: "Text field is empty",
        description: "Please enter you text to extract keywords",
        status: 'error',
        duration: 3000,
        isClosable: false
      });
    } else {
      extractKeywords(text);
    }
  }

  return (
    <>
      <Textarea
        bg='blue.700'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <Button
        bg='blue.500'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'blue.700' }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  )

}

export default TextInput
