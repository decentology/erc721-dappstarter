import "../styles/globals.css";
import "@decentology/hyperverse-ethereum/styles.css";
import type { AppProps } from "next/app";
import { initialize, Provider, Network } from "@decentology/hyperverse/react";
import { Ethereum } from "@decentology/hyperverse-ethereum/react";
import { ERC721 } from "@decentology/hyperverse-evm-erc721/react";
// import React from "react";
// global.React = React;

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [
      {
        bundle: ERC721,
        // add the account address you used to initalize your instance
        tenantId: "0x62a7aa79a52591Ccc62B71729329A80a666fA50f",
      },
    ],
  });
  return (
    <Provider initialState={hyperverse}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
