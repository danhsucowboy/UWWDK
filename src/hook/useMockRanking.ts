import { useState } from 'react'
import mockAvatar from '../asset/img/oval.png'

const getRandomArbitaray = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const useMockRanking = (mockLength: number) => {
  if (mockLength < 1) return []

  let mockData = []

  for (let i = 0; i < mockLength; i++) {
    const avatar = mockAvatar
    const player = `Player-${i + 1}`
    const score = getRandomArbitaray(0, 1000000)
    mockData.push({ avatar, player, score })
  }

  mockData.sort((a, b) => b.score - a.score)

  return mockData
}

export default useMockRanking
