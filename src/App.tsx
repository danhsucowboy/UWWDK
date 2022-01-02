import React from 'react'
import './App.css'
import Header from './component/Header'
import { Routes, Route, Navigate } from 'react-router-dom'
import Access from './page/Access'
import Ranking from './page/Ranking'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Access />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>

      {/* <Navigate to="/ranking" /> */}
    </>
  )
}
export default App
