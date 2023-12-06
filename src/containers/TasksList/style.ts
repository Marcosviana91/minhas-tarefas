import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

const StyledTasksList = styled.main`
  padding: 40px;

  p {
    font-size: 18px;
    font-weight: 700;
  }
`

export const StyledBtnAddTask = styled.button`
  background-color: ${variaveis.COR.VERDE};
  color: white;
  font-size: 40px;
  line-height: 40px;

  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: none;

  position: fixed;
  bottom: 40px;
  right: 40px;
`

export default StyledTasksList
