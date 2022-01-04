import ContentWrapper from '../../component/common/ContentWrapper'

const Access = () => {
  return (
    <ContentWrapper>
      <h2 className="text-2xl tablet:text-4xl leading-20 tablet:leading-20 tracking-wider mt-3 tablet:mt-12 w-full h-20">
        Underground Drink Ranking
      </h2>
      <p className="w-full h-56 mt-3 tablet:mt-8 px-8 text-2xl tablet:text-3xl leading-14 tablet:leading-16">
        Welcom, Cap Hero 🎉 <br />
        Here is the field for you
        <br />
        Link your wallet in and start your battle❗️
      </p>
      <button className="w-56 tablet:w-2/5 desktop:w-1/5 aspect-[7/2] mt-9 desktop:mt-5 rounded-lg tablet:rounded-3xl bg-tertiary subtitle2">
        Connect Wallet
      </button>
    </ContentWrapper>
  )
}

export default Access
