import React, { useEffect, useState } from 'react'
import {
 HomeArea,
 SendMusicForm,
 SendMusicFormButton,
 SendMusicFormInput,
 SendMusicFormTitle,
} from './home-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../../../../constants/colors'

const Home = () => {
 let dataForm = {
  name: '',
  email: '',
 }

 const getInput = () => {
  dataForm = {
   name: document.getElementById('formName').value,
   email: document.getElementById('formEmail').value,
  }

  if (
   dataForm.name !== '' &&
   dataForm.name != null &&
   dataForm.email !== '' &&
   dataForm.email != null
  ) {
   console.log({ dataForm })
  } else {
   window.alert('ERROR')
  }
 }

 return (
  <HomeArea>
   <SendMusicForm>
    <FontAwesomeIcon
     icon={faMusic}
     color={COLORS.DARK_GRAY_9}
     style={{ marginTop: '20px', fontSize: '40px' }}
    />
    <SendMusicFormTitle>send your music suggestion</SendMusicFormTitle>
    <SendMusicFormInput id="formName" placeholder="your name" type="text" />
    <SendMusicFormInput id="formEmail" placeholder="your e-mail" type="email" />

    <SendMusicFormInput
     style={{ marginTop: '20px' }}
     placeholder="music name"
     type="text"
    />
    <SendMusicFormInput placeholder="artist name" type="text" />

    <SendMusicFormButton type="submit" onClick={getInput}>
     submit
    </SendMusicFormButton>
   </SendMusicForm>
  </HomeArea>
 )
}

export default Home
