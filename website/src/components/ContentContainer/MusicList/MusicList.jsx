import React from 'react'
import {
 MusicCard,
 MusicCardImage,
 MusicCardSubTitle,
 MusicCardTitle,
 MusicContainerArea,
} from './musicList-styles'
import Card from '../../Card/Card'

const data = [
 {
  image: 'https://images.pexels.com/photos/1546251/pexels-photo-1546251.jpeg',
  title: 'My Title One',
  subTitle: 'Creator One',
 },
 {
  image:
   'https://images.pexels.com/photos/3704411/pexels-photo-3704411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Two',
  subTitle: 'Creator Two',
 },
 {
  image:
   'https://images.pexels.com/photos/3606752/pexels-photo-3606752.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Three',
  subTitle: 'Creator Three',
 },
 {
  image:
   'https://images.pexels.com/photos/2693200/pexels-photo-2693200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Four',
  subTitle: 'Creator Four',
 },
 {
  image: 'https://images.pexels.com/photos/12492191/pexels-photo-12492191.jpeg',
  title: 'My Title Five',
  subTitle: 'Creator Five',
 },
 {
  image:
   'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Six',
  subTitle: 'Creator Six',
 },
]

const MusicList = () => {
 return (
  <MusicContainerArea>
   {data.map((item, index) => {
    return (
     <Card
      key={index}
      image={item.image}
      title={item.title}
      subTitle={item.subTitle}
      data={item}
     />
    )
   })}
  </MusicContainerArea>
 )
}

export default MusicList
