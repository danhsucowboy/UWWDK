export interface IOpenModal {
  attemptingTxn: boolean
  errorMessage: string | undefined
  txHash: string | undefined
}

export enum ApplicationModal {
  ADMIN,
  WALLET,
  CLAIM,
  COMFIRMATION,
}

export interface IApplications {
  readonly blockNumber: { readonly [chainId: number]: number }
  readonly openModal: { modal: ApplicationModal | null; data?: Partial<IOpenModal> }
}
