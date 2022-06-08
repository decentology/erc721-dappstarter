import '../styles/globals.css'
import "@decentology/hyperverse-ethereum/styles.css";
import type { AppProps } from 'next/app'
import { initialize, Provider, Network } from '@decentology/hyperverse'
import { Ethereum } from '@decentology/hyperverse-ethereum'
import * as NFT from '@decentology/hyperverse-evm-erc721'
import React from 'react';
global.React = React;

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [
      {
        bundle: NFT,
        // add the account address you used to initalize your instance
        tenantId: '0x62a7aa79a52591Ccc62B71729329A80a666fA50f',
      },
    ],
  })
  return (
    <Provider initialState={hyperverse}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
