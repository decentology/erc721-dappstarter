import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initialize, Provider, Network } from '@decentology/hyperverse'
import { Ethereum } from '@decentology/hyperverse-ethereum'
import * as NFT from '@decentology/hyperverse-evm-erc721'

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [
      {
        bundle: NFT,
        // add the account address you used to initalize your instance
        tenantId: '',
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
