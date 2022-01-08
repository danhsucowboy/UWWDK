import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '..'
import { ApplicationModal } from '../../utils/interface/IApplications'
import { setOpenModal } from './action'

export const useBlockNumber = (): number | undefined => {
  const { chainId } = useWeb3React()

  return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

export const useOpenModal = () => {
  const dispath = useDispatch<AppDispatch>()
  return useCallback(
    (modal: ApplicationModal = ApplicationModal.CLAIM, data = {}) => dispath(setOpenModal({ modal, data })),
    [dispath]
  )
}

export const useCloseModal = () => {
  const dispath = useDispatch<AppDispatch>()
  return useCallback(() => dispath(setOpenModal({ modal: null })), [dispath])
}

export const useIsModalOpen = (modal: ApplicationModal) => {
  const openModal = useSelector((state: AppState) => state.application.openModal.modal)
  if (modal !== undefined) {
    return openModal === modal
  } else {
    return openModal ? true : false
  }
}
