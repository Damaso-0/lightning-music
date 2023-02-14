import {
 NavbarArea,
 NavbarDiv,
 NavbarSpacing,
 SearchInput,
} from './navbar-styles'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../../constants/colors'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate = useNavigate()

 const [searchState, setSearchState] = useState()

 const [lightMode, setLightMode] = useState(false)

 const navPathHome = () => {
  navigate('/')
 }

 /* function inputSearchFocus() {
  document.getElementById('MusicSearch').focus()
 } */

 const navPathMusic = () => {
  navigate('/musics')
 }

 return (
  <>
   <NavbarArea>
    <NavbarDiv
     style={{
      fontSize: 20,
      fontWeight: 500,
      color: COLORS.PRINCIPAL_COLOR,
     }}
     onClick={
      (() => {
       if (lightMode === false) {
        setLightMode(true)
       } else {
        setLightMode(false)
       }
      },
      navPathHome)
     }
    >
     <FontAwesomeIcon
      icon={faBolt}
      color={COLORS.PRINCIPAL_COLOR}
      style={{ paddingRight: 10 }}
     />
     Lightning
    </NavbarDiv>

    {/* <NavbarDiv>asdasdasd</NavbarDiv> */}

    <NavbarDiv
     style={{
      fontSize: 20,
      fontWeight: 500,
      color: COLORS.PRINCIPAL_COLOR,
      padding: '10px',
      height: '40%',
      borderRadius: '50px',
      backgroundColor: COLORS.DARK_GRAY_2,
      display: 'flex',
      alignItems: 'center',
      margin: 0,
     }}
    >
     <SearchInput
      placeholder="search"
      style={{
       width: searchState === 'active' ? '200px' : '0px',
      }}
     />

     <FontAwesomeIcon
      icon={faMagnifyingGlass}
      color={COLORS.PRINCIPAL_COLOR}
      style={{
       width: 'auto',
       cursor: 'pointer',
      }}
      onClick={
       (() => {
        if (searchState !== 'active') {
         setSearchState('active')
        } else {
         setSearchState('disable')
        }
        /* window.alert(searchState.current) */
       },
       navPathMusic)
      }
     />
    </NavbarDiv>
   </NavbarArea>
   <NavbarSpacing />
  </>
 )
}

export default Navbar
