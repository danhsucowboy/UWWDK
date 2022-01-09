/// <reference types="react-scripts" />

declare module 'react-jazzicon' {
  export default function ({ diameter: number, seed: number }): JSX.Element
  export function jsNumberForAddress(address: string): number
}
