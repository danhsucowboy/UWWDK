interface IBadge {
  score: number
  rank: number
  position: string
}

const Badge = ({ score, rank, position }: IBadge) => {
  const badgeWrapper = `w-21 h-48 flex flex-col relative ${position}`
  return (
    <div className={badgeWrapper}>
      <div className="z-20 absolute w-7 h-7 rounded-full text-center bg-podium badge leading-7">{rank}</div>
      <div className="w-21 h-21 rounded-full bg-secondary border-4 border-solid border-tertiary z-10"></div>
      <div className="w-full h-39 bg-tertiary absolute top-9 pt-14">
        <span>
          <p>{score}</p>
          <p>CAP</p>
        </span>
      </div>
      <div className="w-0 h-0 z-10 absolute top-37.5 border-solid border-r-[42px] border-l-[42px] border-b-[42px] border-r-transparent border-l-transparent border-b-secondary"></div>
    </div>
  )
}

export default Badge
