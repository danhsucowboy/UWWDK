import { InjectedConnector } from '@web3-react/injected-connector'
import { SUPPORTED_CHAIN_IDS } from './blockchain'
import metamaskIcon from '../../asset/img/wallet@3x.png'

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})

export interface WalletInfo {
  connector?: InjectedConnector
  name: string
  icon?: string
  description?: string
  href?: string | null
  // color?: string
  // mobile?: true
  // mobileOnly?: true
  // style?: Record<string, any>
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: metamaskIcon,
    description: 'Easy-to-use browser extension.',
    href: 'https://metamask.io/download',
  },
}
