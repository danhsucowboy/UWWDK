import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Access from './page/Access'
import Ranking from './page/Ranking'

function App() {
  const location = useLocation()

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

      {/* <Navigate to="/ranking" /> */}
    </div>
  )
}
export default App
