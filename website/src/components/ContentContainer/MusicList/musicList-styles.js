import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'

export const MusicContainerArea = styled.div`
 max-width: 100%;
 padding: 20px;

 display: flex;
 flex-wrap: wrap;
`

export const MusicSearchInput = styled.input`
 width: 50%;
 min-width: 180px;
 height: 25px;
 margin: 30px auto;
 border-radius: 10px;
 background-color: rgba(255, 255, 255, 0.1);
 outline: none;
 border: 1px solid transparent;

 font-size: 22px;
 letter-spacing: 1.2px;
 padding: 10px 20px;
 color: ${COLORS.LIGHT_GRAY_3};
 box-shadow: none;
`
