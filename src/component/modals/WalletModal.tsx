import { useState, useEffect } from 'react'
import metamaskIcon from '../../asset/img/wallet@3x.png'
import { useCloseModal, useIsModalOpen } from '../../redux/application/hook'
import { ApplicationModal } from '../../utils/interface/IApplications'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
// import { AbstractConnector } from '@web3-react/abstract-connector'
import { SUPPORTED_WALLETS } from '../../utils/constants/wallet'

const WalletModal = () => {
  const { active, account, chainId, connector, activate, error } = useWeb3React()
  const isModalOpen = useIsModalOpen(ApplicationModal.WALLET)
  const closeModal = useCloseModal()
  const isMetamask = window.ethereum?.isMetaMask
  const wallet = SUPPORTED_WALLETS['METAMASK']

  const renderView = () => {
    const activateWallet = (connector?: InjectedConnector) => {
      connector &&
        activate(connector, undefined, true).catch((err) => {
          console.log(err)
        })
    }

    if (!(window.web3 || window.ethereum)) {
      return (
        <div>
          <a href="https://metamask.io/" key="wallet-metamask"></a>
        </div>
      )
    } else if (isMetamask) {
      return (
        <button
          className="flex justify-between items-center w-full h-16 px-4 rounded-2xl border border-solid border-white tablet:mt-4"
          onClick={() => activateWallet(wallet.connector)}
        >
          <div className="subtitle3">Metamask</div>
          <img className="w-10 h-10" src={metamaskIcon} alt="Metamask icon" />
        </button>
      )
    }
  }

  return (
    <>
      {isModalOpen &&
        (account ? (
          ''
        ) : (
          <>
            <div className="absolute  w-full h-full flex justify-center items-center">
              <div className="z-10 absolute w-full h-full bg-blackDrop" onClick={closeModal}></div> {/*black mask*/}
              <div className="z-20 w-75 h-50 tablet:w-90 tablet:h-60  bg-[#0e175e] py-2 px-4 tablet:px-6 rounded-md">
                <div className="w-full h-20 text-center font-bold text-2xl leading-20 mx-auto">Connect to a wallet</div>
                {renderView()}
              </div>
            </div>
          </>
        ))}
    </>
  )
}

export default WalletModal
