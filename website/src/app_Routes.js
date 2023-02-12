import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import NavbarPlayer from './components/NavbarColumn/NavPlayer'
import MusicList from './components/ContentContainer/MusicList/MusicList'
import Home from './components/ContentContainer/MusicList/Home/Home'

import { CurrentMusicProvider } from './helpers/currentMusic'

const AppRoutes = () => {
 return (
  <BrowserRouter>
   <CurrentMusicProvider>
    <Navbar />
    <Routes>
     <Route path="/">
      <Route index element={<Home />} />
      <Route path="musics" element={<MusicList />} />
     </Route>
    </Routes>
    <NavbarPlayer />
   </CurrentMusicProvider>
  </BrowserRouter>
 )
}

export default AppRoutes
