import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const MusicCard = styled.div`
 width: 200px;
 height: 250px;
 margin: 10px;

 border-radius: 10px;
 background-color: ${COLORS.DARK_GRAY_1};

 display: flex;
 flex-direction: column;
 justify-content: start;

 transition: all 0.2s;

 :hover {
  background-color: ${COLORS.DARK_GRAY_2};
  cursor: pointer;
 }
`

export const MusicCardImage = styled.img`
 max-width: 100%;
 height: 60%;
 margin: 10px;

 border-radius: 10px;
 background-color: ${COLORS.DARK_GRAY_3};
 object-fit: cover;
`

export const MusicCardTitle = styled.h3`
 width: 100%;
 margin: 10px;

 font-size: 15px;
 font-weight: 600;
 color: ${COLORS.LIGHT_GRAY_2};
`

export const MusicCardSubTitle = styled.p`
 width: 100%;
 margin: 0 10px 10px 10px;

 font-size: 15px;
 font-weight: 500;
 color: ${COLORS.LIGHT_GRAY_3};
`

export const PlayerDataMusicImage = styled.img`
 min-width: 100px;
 min-height: 100px;
 object-fit: cover;

 color: ${COLORS.DARK_GRAY_5};
`
