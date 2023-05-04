import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
  useAddress,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { FluentProvider } from "@/context";

export const theme = extendTheme({ colors });

//const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const address = useAddress();
  const Router = useRouter();

  useEffect(() => {
    if (address) {
      Router.push("/welcome");
    }
  }, [address]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        activeChain="binance-testnet"
        supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
      >
        <ChakraProvider>
          <FluentProvider>
            <Component {...pageProps} />
          </FluentProvider>
        </ChakraProvider>
      </ThirdwebProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
