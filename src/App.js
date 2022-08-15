import * as React from 'react'
import Navbar from './components/Navbar'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}

// Hello World in React JSX syntax