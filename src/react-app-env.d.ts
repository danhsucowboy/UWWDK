/// <reference types="react-scripts" />

declare module 'react-jazzicon' {
  export default function ({ diameter: number, seed: number }): JSX.Element
  export function jsNumberForAddress(address: string): number
}

interface Window {
  ethereum?: {
    isMetaMask?: boolean
  }
  web3?: Record<string, unknown>
}
