import {
  StyledBtnEditar,
  StyledBtnRemover
} from '../../components/TaskBtn/StyledBtn'
import {
  StyledPriorityTag,
  StyledStatusTag
} from '../../components/TaskTags/StyledTags'
import { TaskProps } from '../../utils/types/TypeTasks'
import StyledTask from './style'

function Task(props: TaskProps) {
  return (
    <StyledTask id={props.id}>
      <label>
        <input type="checkbox" />
        <h3>{props.title}</h3>
      </label>
      <div id="tags">
        <StyledPriorityTag>{props.priority}</StyledPriorityTag>
        <StyledStatusTag>{props.status}</StyledStatusTag>
      </div>
      <div id="desc">{props.description}</div>
      <div id="btn">
        <StyledBtnEditar>Editar</StyledBtnEditar>
        <StyledBtnRemover>Remover</StyledBtnRemover>
      </div>
    </StyledTask>
  )
}

export default Task
