import React, { useState, useEffect, createElement } from 'react'
import {
 MusicCard,
 MusicCardImage,
 MusicCardSubTitle,
 MusicCardTitle,
 PlayerDataMusicImage,
} from './card-styles'
import { ReactDOM } from 'react'
import { PlayerSpec } from '../../PlayerSpec'

const Card = ({ title, subTitle, image, data }) => {
 const renderArea = document.getElementById('playerDataMusic')

 const [dataMusic, setDataMusic] = useState([])
 const [dataMusicSpec, setDataMusicSpec] = useState()

 useEffect(() => {
  setDataMusic(data)
 }, [data])

 const MusicDataSpec = () => {
  renderArea.innerHTML = dataMusic.title
 }

 return (
  <MusicCard onClick={MusicDataSpec}>
   <MusicCardImage src={image} />
   <MusicCardTitle>{title}</MusicCardTitle>
   <MusicCardSubTitle>{subTitle}</MusicCardSubTitle>
  </MusicCard>
 )
}

export default Card
