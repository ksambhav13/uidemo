'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'

const proTheme = extendTheme(theme)
const extendedConfig = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
}
const myTheme = extendTheme(extendedConfig, proTheme)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider >
      <ChakraProvider theme={myTheme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}