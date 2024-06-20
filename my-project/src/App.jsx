import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeLayout from './Components/HomeLayout'
import RemoveBackgroundPage from './Components/RemoveBackgroundPage'
import Pricing from './Components/Pricing'
// import Main from './Components/Main'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/price" element={<Pricing />}></Route>
        {/* <Route path="/Main" element={<Main />} /> */}
        <Route path="/remove-background" element={<RemoveBackgroundPage />} />
      </Routes>
    </>
  )
}

export default App
