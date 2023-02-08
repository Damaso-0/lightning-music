import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const NavbarArea = styled.div`
 width: calc(100% - 100px);
 height: 60px;

 display: flex;
 position: fixed;
 top: 0;
 left: 0;
 align-items: center;
 justify-content: space-between;

 padding: 0 50px;

 background-color: ${COLORS.BLACK_3};
 border-bottom: 1px solid ${COLORS.DARK_GRAY_3};

 cursor: default;

 transition: all 1s;
`

export const NavbarSpacing = styled.div`
 width: 100%;
 height: 60px;

 background-color: transparent;
`

export const NavbarDiv = styled.div`
 /* height: 100%; */
 /*  width: 100%; */

 display: flex;
 align-items: center;
 justify-content: start;
`

export const SearchInput = styled.input`
 height: 80%;
 width: 100px;

 background-color: transparent;
 border: none;

 display: flex;
 align-items: center;
 justify-content: start;
 color: ${COLORS.LIGHT_GRAY_3};

 transition: all 0.5s;

 :focus-visible {
  outline: none;
 }
`
