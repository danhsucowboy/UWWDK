import { useEffect } from 'react'
import ContentWrapper from '../../component/common/ContentWrapper'
import Podium from '../../component/common/Podium'
import useMockRanking from '../../hook/useMockRanking'
import Table from '../../component/common/Table'
import { useWeb3React } from '@web3-react/core'
import { ChainId } from '../../utils/constants/blockchain'
import { useNavigate } from 'react-router-dom'

const Ranking = () => {
  const totalUsers = 99
  const mockRanking = useMockRanking(totalUsers)

  const { account, chainId } = useWeb3React()
  const navigate = useNavigate()

  useEffect(() => {
    if (!account) {
      navigate('/', { replace: true })
    }
  }, [account])

  return (
    <ContentWrapper overflow={'overflow-y-scroll'}>
      <div className="w-full h-232 tablet:px-20 desktop:px-40">
        <p className="mt-4 w-full h-8 text-2xl leading-8">Total Players On Rank: {totalUsers}</p>
        <Podium rankings={mockRanking.slice(0, 3)} />
        <div className="mt-4 tablet:mt-8 w-full h-144 px-4 desktop:px-20">
          {/* <div className="w-full h-136 rounded-2xl bg-tertiary"> */}
          <Table rankings={mockRanking.slice(3, mockRanking.length)} />
          {/* </div> */}
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Ranking
