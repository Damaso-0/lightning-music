import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const NavPlayerArea = styled.div`
 width: 100%;
 height: 100px;
 bottom: 0;
 left: 0;

 position: relative;

 display: flex;
 align-items: center;
 justify-content: center;
 position: fixed;
 background-color: ${COLORS.DARK_GRAY_1};
`

export const NavPlayerSpacing = styled.div`
 width: 100%;
 height: 100px;

 background-color: transparent;
`

export const PlayerControl = styled.div`
 height: 100%;

 display: flex;
 align-items: center;
`

export const PlayerDataMusic = styled.div`
 height: 80%;
 margin: 20px 10px;

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 0;

 font-weight: 600;
 color: ${COLORS.LIGHT_GRAY_3};
`

export const PlayerSpec = styled.div`
 height: 80%;
 margin: 20px 10px;

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: absolute;
 right: 0;

 font-weight: 600;
 color: ${COLORS.LIGHT_GRAY_3};
`
