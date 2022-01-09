import { useState, useEffect } from 'react'
import WalletModal from '../modals/WalletModal'
import { useOpenModal } from '../../redux/application/hook'
import { ApplicationModal } from '../../utils/interface/IApplications'
import { useWeb3React } from '@web3-react/core'
import { displayAddress } from '../../utils/constants/displayAddress'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

interface IHeaderProps {
  className?: string
}

const Header = ({ className }: IHeaderProps) => {
  // const Jazzicon = require('react-jazzicon')
  const { account, chainId } = useWeb3React()
  const openModal = useOpenModal()
  const mockAccount = '0x5AB7FcDE27F6cff815be2F1D1034a7e3F52bC169'
  // const [appView, setAppView] = useState(ApplicationModal.WALLET)

  // useEffect(() => {
  //   if(account)
  //     setAppView()

  // },[account])

  return (
    <>
      <div className={className}>
        <h1 className="h-14 ml-4 leading-14">UD</h1>
        <button
          className="subtitle1 w-56 h-8 mr-4 bg-tertiary rounded-2xl"
          onClick={() => {
            openModal(ApplicationModal.WALLET)
          }}
        >
          {account ? (
            <div className="w-full px-4 flex justify-center items-center">
              <span className="mr-4">{displayAddress(account)}</span>
              <Jazzicon diameter={20} seed={jsNumberForAddress(account)} />
            </div>
          ) : (
            'Connect Wallet'
          )}
        </button>
      </div>
      <WalletModal />
    </>
  )
}

export default Header
