import { createContext, useState } from 'react'

export const currentMusic = createContext()

export function CurrentMusicProvider({ children }) {
 const [currentDataMusic, setCurrentDataMusic] = useState()

 return (
  <currentMusic.Provider value={{ currentDataMusic, setCurrentDataMusic }}>
   {children}
  </currentMusic.Provider>
 )
}
