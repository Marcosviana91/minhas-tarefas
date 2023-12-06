import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

const StyledBtn = styled.button`
  color: white;
  font-size: 12px;
  font-weight: 700;
  min-width: 56px;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
export const StyledBtnSalvar = styled(StyledBtn)`
  background-color: ${variaveis.COR.VERDE};
`

export const StyledBtnEditar = styled(StyledBtn)`
  background-color: ${variaveis.COR.CINZA};
`

export const StyledBtnRemover = styled(StyledBtn)`
  background-color: ${variaveis.COR.VERMELHO};
`

export const StyledBtnVoltar = styled(StyledBtn)`
  background-color: ${variaveis.COR.CINZA};
`
