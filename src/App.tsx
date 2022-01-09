import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Access from './page/Access'
import Ranking from './page/Ranking'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const { account } = useWeb3React()
  useEffect(() => {
    if (account) navigate('../ranking', { replace: true })
    else navigate('/', { replace: true })
  }, [account])

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header className="flex justify-between items-center bg-primary w-full h-full basis-14" />
      <div className="basis-full">
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>
      {location.pathname === '/' && <Footer className={'bg-primary w-full h-full basis-14 '} />}
    </div>
  )
}
export default App
