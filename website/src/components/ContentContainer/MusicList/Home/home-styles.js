import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'

export const HomeArea = styled.div`
 width: 100%;
`

export const SendMusicForm = styled.form`
 max-width: 400px;
 height: 570px;
 margin: 20px auto;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 background-color: ${COLORS.DARK_GRAY_2};
 border-radius: 10px;
`

export const SendMusicFormTitle = styled.h2`
 margin: 40px 0;
 text-align: center;
 font-size: 26px;
 font-weight: 300;
 color: ${COLORS.LIGHT_GRAY_3};
`

export const SendMusicFormInput = styled.input`
 width: calc(80% - 20px);
 height: 40px;
 margin: 20px 0;
 margin-top: 0;
 padding: 0 10px;
 font-size: 20px;
 font-weight: 400;
 color: ${COLORS.DARK_GRAY_9};

 outline: none;
 border: 1px solid ${COLORS.DARK_GRAY_5};
 border-radius: 10px;
 background-color: transparent;

 :focus {
  background-color: transparent;
  border: 1px solid ${COLORS.PRINCIPAL_COLOR};
 }

 :-webkit-autofill {
  -webkit-box-shadow: transparent;
 }
`

export const SendMusicFormButton = styled.div`
 width: 100px;
 height: 35px;
 display: flex;
 margin: 20px 0;
 align-items: center;
 justify-content: center;
 border: 1px solid transparent;
 border-radius: 10px;
 font-size: 20px;
 font-weight: 600;
 color: ${COLORS.DARK_GRAY_3};
 background-color: ${COLORS.PRINCIPAL_COLOR};

 transition: 0.2s;

 :hover {
  cursor: pointer;
  color: ${COLORS.PRINCIPAL_COLOR};
  background-color: transparent;
  border: 1px solid ${COLORS.PRINCIPAL_COLOR};
 }
`
