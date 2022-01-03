import { useEffect } from 'react'
import ContentWrapper from '../../component/common/ContentWrapper'
import Podium from '../../component/common/Podium'
import useMockRanking from '../../hook/useMockRanking'
import Table from '../../component/common/Table'

const Ranking = () => {
  const totalUsers = 10000
  const scores = [653234, 777777, 233412]
  const ranks = [2, 1, 3]
  const mockRanking = useMockRanking(100)

  return (
    <ContentWrapper overflow={'overflow-y-scroll'}>
      <div className="w-full h-232">
        <p className="mt-4 w-full h-8 text-2xl leading-8">Total Players On Rank: {totalUsers}</p>
        <Podium scores={scores} ranks={ranks} />
        <div className="mt-4 w-full h-144 px-4">
          {/* <div className="w-full h-136 rounded-2xl bg-tertiary"> */}
          <Table rankings={mockRanking.slice(3, mockRanking.length)} />
          {/* </div> */}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Ranking
