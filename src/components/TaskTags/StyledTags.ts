import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Task'

export const StyledTag = styled.div`
  border-radius: 8px;
  color: white;
  font-weight: 700;
  padding: 4px 8px;
  font-size: 10px;
`

type StatusProps = {
  status: enums.STATUS
}
export const StyledStatusTag = styled(StyledTag)<StatusProps>`
  background-color: ${(props) => {
    return props.status === enums.STATUS.PENDENTE
      ? variaveis.COR.LARANJA
      : variaveis.COR.CINZA
  }};
`
export const StyledPriorityTag = styled(StyledTag)<{
  prioridade: enums.PRIORITY
}>`
  background-color: ${(props) => {
    switch (props.prioridade) {
      case enums.PRIORITY.URGENTE:
        return variaveis.COR.VERMELHO
      case enums.PRIORITY.IMPORTANTE:
        return variaveis.COR.AMARELO
      default:
        return variaveis.COR.VERDE
    }
  }};
`
