import { createReducer } from '@reduxjs/toolkit'
import { IApplications } from '../../utils/interface/IApplications'
import { setOpenModal, updateBlockNumber } from './action'

const initialState: IApplications = {
  blockNumber: {},
  openModal: { modal: null },
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(updateBlockNumber, (state, action) => {
      const { chainId, blockNumber } = action.payload
      if (typeof state.blockNumber[chainId] !== 'undefined') {
        state.blockNumber[chainId] = blockNumber
      } else {
        state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
      }
    })
    .addCase(setOpenModal, (state, action) => {
      state.openModal = {
        modal: action.payload.modal,
        data: action.payload.data ?? {},
      }
    })
})
