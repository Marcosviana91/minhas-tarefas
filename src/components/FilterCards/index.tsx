import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { filterByTag } from '../../store/reducers/filterTask'
import { typeFilterTag } from '../../store/reducers/filterTask'

import { StyledCard } from './style'
import { FilterCardsProps } from '../../utils/types/TypeTasks'

function Card(props: FilterCardsProps) {
  const dispatch = useDispatch()
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
      <h2>{props.counter}</h2>
      <p>{props.description}</p>
    </StyledCard>
  )
}

export default Card
