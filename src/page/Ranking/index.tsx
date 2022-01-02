import ContentWrapper from '../../component/common/ContentWrapper'
import Podium from '../../component/common/Podium'

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Rank</th>
        <th>Player</th>
        <th>Score</th>
      </tr>
    </thead>
  )
}

const TableData = () => {
  return <tr></tr>
}

const Ranking = () => {
  const totalUsers = 10000
  const scores = [653234, 777777, 233412]
  const ranks = [2, 1, 3]
  return (
    <ContentWrapper height={'h-screen'} overflow={'overflow-y-scroll'}>
      <div className="w-full h-260">
        <p className="mt-4 w-full h-8 text-2xl leading-8">Total Players On Rank: {totalUsers}</p>
        <Podium scores={scores} ranks={ranks} />
        <div className="mt-4 w-full h-136 px-4">
          {/* <div className="w-full h-136 rounded-2xl bg-tertiary"> */}
          <table className="w-full h-136 rounded-2xl bg-tertiary table-auto">
            <TableHead />
            <tbody></tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Ranking
