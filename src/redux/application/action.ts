import { IOpenModal, ApplicationModal } from '../../utils/interface/IApplications'
import { createAction } from '@reduxjs/toolkit'

export const updateBlockNumber = createAction<{ chainId: number; blockNumber: number }>('application/updateBlockNumber')
export const setOpenModal =
  createAction<{ modal: ApplicationModal | null; data?: Partial<IOpenModal> }>('application/setOpenModal')
