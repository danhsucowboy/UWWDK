import ContentWrapper from '../../component/common/ContentWrapper'

const Ranking = () => {
  const totalUsers = 10000
  const score = 777777
  const rank = 1
  return (
    <ContentWrapper>
      <p className="mt-4 w-full h-8 text-2xl leading-8">Total Players On Rank: {totalUsers}</p>
      <div className="w-full h-56 flex justify-between px-7 mt-6">
        <div className="w-21 h-48 flex flex-col self-end relative">
          <div className="z-20 absolute w-7 h-7 rounded-full text-center bg-podium badge leading-7">{rank}</div>
          <div className="w-21 h-21 rounded-full bg-secondary border-4 border-solid border-tertiary z-10"></div>
          <div className="w-full h-42 bg-tertiary absolute top-9 pt-14">
            <span>
              <p>{score}</p>
              <p>CAP</p>
            </span>
          </div>
          <div className="w-0 h-0 z-10 absolute top-37.5 border-solid border-r-[42px] border-l-[42px] border-b-[42px] border-r-transparent border-l-transparent border-b-secondary"></div>
        </div>
        <div className="w-21 h-48 bg-tertiary"></div>
        <div className="w-21 h-48 bg-tertiary self-end"></div>
      </div>
    </ContentWrapper>
  )
}

export default Ranking
