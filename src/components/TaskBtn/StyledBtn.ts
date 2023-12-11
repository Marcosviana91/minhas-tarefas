import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
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
export const StyledBtnCancelar = styled(StyledBtn)`
  background-color: ${variaveis.COR.LARANJA};
`
export const StyledBtnVoltar = styled(Link)`
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  min-width: 56px;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${variaveis.COR.CINZA};
  cursor: pointer;
`

export const StyledBtnAddTask = styled(Link)`
  background-color: ${variaveis.COR.VERDE};
  color: white;
  text-decoration: none;
  font-size: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: none;

  position: fixed;
  bottom: 40px;
  right: 40px;

  opacity: 0.8;
  transition: 300ms all;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`
