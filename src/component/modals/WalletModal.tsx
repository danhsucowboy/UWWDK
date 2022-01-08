import metamaskIcon from '../../asset/img/wallet@3x.png'

const WalletModal = () => {
  return (
    <>
      <div className="z-10 absolute w-full h-full bg-blackDrop">
        <div className="z-20 absolute w-75 h-50 tablet:w-90 tablet:h-60 top-[306px] left-[37px] tablet:top-[392px] tablet:left-[204px] desktop:top-[240px] desktop:left-[460px] bg-[#0e175e] py-2 px-4 tablet:px-6 rounded-md">
          <div className="w-full h-20 text-center font-bold text-2xl leading-20 mx-auto">Connect to a wallet</div>
          <button className="flex justify-between items-center w-full h-16 px-4 rounded-2xl border border-solid border-white tablet:mt-4">
            <div className="subtitle3">Metamask</div>
            <img className="w-10 h-10" src={metamaskIcon} alt="Metamask icon" />
          </button>
        </div>
      </div>
    </>
  )
}

export default WalletModal
