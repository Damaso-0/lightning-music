import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {
 faPlayCircle,
 faBackward,
 faForward,
 faStopCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
 NavPlayerArea,
 NavPlayerSpacing,
 PlayerControl,
 PlayerDataImage,
 PlayerDataMusic,
 PlayerDataSubTitle,
 PlayerDataText,
 PlayerDataTitle,
 PlayerSpec,
} from './navPlayer-styles'
import { COLORS } from '../../constants/colors'
import { useContext } from 'react'
import { currentMusic } from '../../helpers/currentMusic'

const NavbarPlayer = () => {
 const [playState, setPlayState] = useState(faPlayCircle)

 const { currentDataMusic } = useContext(currentMusic)

 return (
  <>
   <NavPlayerArea>
    {currentDataMusic && (
     <PlayerDataMusic id="playerDataMusic">
      <PlayerDataImage src={currentDataMusic.image} />
      <PlayerDataText>
       <PlayerDataTitle>{currentDataMusic.title}</PlayerDataTitle>
       <PlayerDataSubTitle>{currentDataMusic.subTitle}</PlayerDataSubTitle>
      </PlayerDataText>
     </PlayerDataMusic>
    )}

    <PlayerControl style={{ fontSize: 30 }}>
     <FontAwesomeIcon
      icon={faBackward}
      color={COLORS.DARK_GRAY_6}
      style={{ marginRight: 20, cursor: 'pointer' }}
     />
     <FontAwesomeIcon
      icon={playState}
      color={COLORS.LIGHT_GRAY_2}
      style={{ marginRight: 20, cursor: 'pointer' }}
      onClick={() => {
       if (playState === faPlayCircle) {
        setPlayState(faStopCircle)
       } else {
        setPlayState(faPlayCircle)
       }
      }}
     />
     <FontAwesomeIcon
      icon={faForward}
      color={COLORS.DARK_GRAY_6}
      style={{ cursor: 'pointer' }}
     />
    </PlayerControl>
    <div id="printHere"></div>
    <PlayerSpec></PlayerSpec>
   </NavPlayerArea>
   <NavPlayerSpacing />
  </>
 )
}

export default NavbarPlayer
