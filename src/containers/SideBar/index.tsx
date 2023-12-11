import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { filterByWord } from '../../store/reducers/filterTask'

import Card from '../../components/FilterCards'
import {
  StyledBtnVoltar,
  StyledBtnAddTask
} from '../../components/TaskBtn/StyledBtn'
import StyledSideBar from './style'
import * as enums from '../../utils/enums/Task'

function SideBar() {
  const addingTask = window.location.pathname == '/novatarefa'
  const dispatch = useDispatch()
  const filterWord = useSelector(
    (state: RootReducer) => state.filterTask.filterWord
  )

  return (
    <StyledSideBar>
      {!addingTask ? (
        <div>
          <input
            type="text"
            placeholder="Procurar"
            value={filterWord}
            onChange={(e) => dispatch(filterByWord(e.target.value))}
          />
          <div>
            <Card description={enums.STATUS.PENDENTE} />
            <Card description={enums.STATUS.CONCLUIDO} />
            <Card description={enums.PRIORITY.URGENTE} />
            <Card description={enums.PRIORITY.IMPORTANTE} />
            <Card description={enums.PRIORITY.NORMAL} />
            <Card description={'todas'} />
          </div>
          <StyledBtnAddTask to={'/novatarefa'}>+</StyledBtnAddTask>
        </div>
      ) : (
        <StyledBtnVoltar to={'/'}>Voltar a lista de tarefas</StyledBtnVoltar>
      )}
    </StyledSideBar>
  )
}

export default SideBar
