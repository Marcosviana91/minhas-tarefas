import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { filterByWord } from '../../store/reducers/filterTask'

import Card from '../../components/FilterCards'
import { StyledBtnVoltar } from '../../components/TaskBtn/StyledBtn'
import StyledSideBar from './style'
import * as enums from '../../utils/enums/Task'

const adding = true

function SideBar() {
  const dispatch = useDispatch()
  const filterWord = useSelector(
    (state: RootReducer) => state.filterTask.filterWord
  )
  const tasks_list = useSelector((state: RootReducer) => state.taskList.tasks)

  return (
    <StyledSideBar>
      {adding ? (
        <div>
          <input
            type="text"
            placeholder="Procurar"
            value={filterWord}
            onChange={(e) => dispatch(filterByWord(e.target.value))}
          />
          <div>
            <Card counter="3" description={enums.STATUS.PENDENTE} />
            <Card counter="3" description={enums.STATUS.CONCLUIDO} />
            <Card counter="3" description={enums.PRIORITY.URGENTE} />
            <Card counter="3" description={enums.PRIORITY.IMPORTANTE} />
            <Card counter="3" description={enums.PRIORITY.NORMAL} />
            <Card
              counter={tasks_list.length.toString()}
              description={'todas'}
            />
          </div>
        </div>
      ) : (
        <StyledBtnVoltar>Voltar a lista de tarefas</StyledBtnVoltar>
      )}
    </StyledSideBar>
  )
}

export default SideBar
