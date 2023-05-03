import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
<<<<<<< HEAD
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect } from 'react'
=======
import { useHuddle01 } from "@huddle01/react";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
>>>>>>> 6303730b44d210b62ba505ebd608f48996cbc63f

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export const theme = extendTheme({ colors });

//const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return (
    <ChakraProvider>
      <ThirdwebProvider activeChain="filecoin-testnet">
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChakraProvider>
=======
  const [queryClient] = useState(() => new QueryClient());
  const { initialize, isInitialized } = useHuddle01();

  useEffect(() => {
    initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR");
  }, [initialize]);
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        activeChain="binance-testnet"
        supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThirdwebProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
>>>>>>> 6303730b44d210b62ba505ebd608f48996cbc63f
  );
}
