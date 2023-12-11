import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'
import { filterByTag } from '../../store/reducers/filterTask'
import { FilterTask } from '../../containers/TasksList'
import { FilterCardsProps, typeFilterTag } from '../../utils/types/TypeTasks'

import { StyledCard } from './style'

function Card(props: FilterCardsProps) {
  const dispatch = useDispatch()
  const tasks_list = useSelector((state: RootReducer) => state.taskList.tasks)
  const currentTag = useSelector(
    (state: RootReducer) => state.filterTask.filterTag
  )
  return (
    <StyledCard
      className={props.description == currentTag ? 'active' : ''}
      onClick={() => {
        dispatch(filterByTag(props.description as typeFilterTag))
      }}
    >
      <h2>{FilterTask(tasks_list, props.description).length}</h2>
      <p>{props.description}</p>
    </StyledCard>
  )
}

export default Card
