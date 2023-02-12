import React from 'react'
import { MusicContainerArea } from './musicList-styles'
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
 {
  image: 'https://images.pexels.com/photos/3761228/pexels-photo-3761228.jpeg',
  title: 'My Title Seven',
  subTitle: 'Creator Seven',
 },
 {
  image: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg',
  title: 'My Title Eight',
  subTitle: 'Creator Eight',
 },
 {
  image:
   'https://images.pexels.com/photos/3528052/pexels-photo-3528052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Nine',
  subTitle: 'Creator Nine',
 },
 {
  image:
   'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Ten',
  subTitle: 'Creator Ten',
 },
 {
  image:
   'https://images.pexels.com/photos/2860804/pexels-photo-2860804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Eleven',
  subTitle: 'Creator Eleven',
 },
 {
  image:
   'https://images.pexels.com/photos/3016037/pexels-photo-3016037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'My Title Twelve',
  subTitle: 'Creator Twelve',
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
