import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const StyledTag = styled.div`
  border-radius: 8px;
  color: white;
  font-weight: 700;
  padding: 4px 8px;
  font-size: 10px;
`
export const StyledStatusTag = styled(StyledTag)`
  background-color: ${variaveis.COR.LARANJA};
`
export const StyledPriorityTag = styled(StyledTag)`
  background-color: ${variaveis.COR.VERMELHO};
`
