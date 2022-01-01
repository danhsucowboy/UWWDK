import ContentWrapper from '../../component/common/ContentWrapper'

const Access = () => {
  return (
    <ContentWrapper>
      <h2 className="text-2xl leading-20 tracking-wider mt-3 w-full h-20">Underground Drink Ranking</h2>
      <p className="w-full h-56 mt-3 px-8 text-2xl leading-14">
        Welcom Cap Hero! <br />
        Here is the field for you <br />
        Link your wallet in and ready for your battle!
      </p>
      <button className="w-56 h-16 mt-9 rounded-lg bg-tertiary subtitle2">Connect Wallet</button>
    </ContentWrapper>
  )
}

export default Access
