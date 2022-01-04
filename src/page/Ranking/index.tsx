import { useEffect } from 'react'
import ContentWrapper from '../../component/common/ContentWrapper'
import Podium from '../../component/common/Podium'
import useMockRanking from '../../hook/useMockRanking'
import Table from '../../component/common/Table'

const Ranking = () => {
  const totalUsers = 99
  const mockRanking = useMockRanking(totalUsers)

  return (
    <ContentWrapper overflow={'overflow-y-scroll'}>
      <div className="w-full h-232">
        <p className="mt-4 w-full h-8 text-2xl leading-8">Total Players On Rank: {totalUsers}</p>
        <Podium rankings={mockRanking.slice(0, 3)} />
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
