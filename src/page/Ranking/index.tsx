import { useEffect } from 'react'
import ContentWrapper from '../../component/common/ContentWrapper'
import Podium from '../../component/common/Podium'
import useMockRanking from '../../hook/useMockRanking'
import numeral from 'numeral'

interface IRankings {
  rankings: {
    player: string
    score: number
  }[]
}

const TableHead = () => {
  return (
    <thead>
      <tr className="w-full h-14 subtitle3 leading-14">
        <th>Rank</th>
        <th>Player</th>
        <th>Score</th>
      </tr>
    </thead>
  )
}

const TableData = ({ rankings }: IRankings) => {
  return (
    <tbody>
      {rankings.map((r, i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{r.player}</td>
            <td>{numeral(r.score).format('0,0')} CAP</td>
          </tr>
        )
      })}
    </tbody>
  )
}

const Ranking = () => {
  const totalUsers = 10000
  const scores = [653234, 777777, 233412]
  const ranks = [2, 1, 3]
  const mockRanking = useMockRanking(9)

  return (
    <ContentWrapper overflow={'overflow-y-scroll'}>
      <div className="w-full h-228">
        <p className="mt-4 w-full h-8 text-2xl leading-8">Total Players On Rank: {totalUsers}</p>
        <Podium scores={scores} ranks={ranks} />
        <div className="mt-4 w-full h-136 px-4">
          {/* <div className="w-full h-136 rounded-2xl bg-tertiary"> */}
          <table className="w-full h-136 rounded-2xl bg-tertiary table-auto">
            <TableHead />
            <TableData rankings={mockRanking} />
          </table>
          {/* </div> */}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Ranking
