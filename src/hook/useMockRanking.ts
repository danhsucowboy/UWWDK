import { useState } from 'react'

const getRandomArbitaray = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const useMockRanking = (mockLength: number) => {
  // const [rankings, setRankings] = useState<Array<Record<string, any>>>([{ palyer: '', score: '' }])

  if (mockLength < 1) return []

  let mockData = []

  for (let i = 0; i < mockLength; i++) {
    const player = `player-${i + 1}`
    const score = getRandomArbitaray(0, 1000000)
    mockData.push({ player, score })
  }

  mockData.sort((a, b) => b.score - a.score)

  // console.log(mockData)
  // setRankings(mockData)

  return mockData
}

export default useMockRanking
