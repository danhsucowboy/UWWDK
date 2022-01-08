import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { updateBlockNumber } from './action'
import { useDispatch } from 'react-redux'

export default function Updater(): null {
  const { library, chainId } = useWeb3React()
  const dispatch = useDispatch()

  const updateBlockCallback = (blockNumber: number) => {
    if (chainId) {
      dispatch(
        updateBlockNumber({
          chainId: chainId,
          blockNumber: blockNumber,
        })
      )
    }
  }

  useEffect(() => {
    if (!library || !chainId) return undefined

    library.getBlockNumber().then(updateBlockCallback)
    library.on('block', updateBlockCallback)

    return () => {
      library.removeListener('block', updateBlockCallback)
    }
  }, [chainId, dispatch, library])

  return null
}
