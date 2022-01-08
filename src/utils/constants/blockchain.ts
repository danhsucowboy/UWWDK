export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  BSC = 56,
  BSC_TEST = 97,
}

export const SUPPORTED_CHAIN_IDS = [ChainId.RINKEBY]

export const SEC_PER_BLOCK = {
  BSC: 3,
  ETH: 13.5,
}
