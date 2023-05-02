import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect } from 'react'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

//const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider activeChain="filecoin-testnet">
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChakraProvider>
  );
}
