import React, { useContext } from 'react'
import {
 MusicCard,
 MusicCardImage,
 MusicCardSubTitle,
 MusicCardTitle,
} from './card-styles'

import { currentMusic } from '../../helpers/currentMusic'

export function Card({ title, subTitle, image, data }) {
 const { setCurrentDataMusic } = useContext(currentMusic)

 const actualMusic = () => {
  setCurrentDataMusic(data)
 }

 return (
  <MusicCard onClick={actualMusic}>
   <MusicCardImage src={image} />
   <MusicCardTitle>{title}</MusicCardTitle>
   <MusicCardSubTitle>{subTitle}</MusicCardSubTitle>
  </MusicCard>
 )
}

export default Card
