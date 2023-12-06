import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Task from '../Task'
import StyledTasksList, { StyledBtnAddTask } from './style'

function TasksList() {
  const currentFilterWord = useSelector(
    (state: RootReducer) => state.filterTask.filterWord
  )
  const currentTag = useSelector(
    (state: RootReducer) => state.filterTask.filterTag
  )
  const tasks_list = useSelector((state: RootReducer) => state.taskList.tasks)
  //Aplicar as opções de filtro (2 filtros aninhados)
  const tasks_list_filtred = tasks_list
    .filter((task) => {
      if (currentTag == 'todas') {
        return task
      }
      if (task.status == currentTag || task.priority == currentTag) {
        return task
      }
    })
    .filter((task) => {
      if (
        task.description.includes(currentFilterWord) ||
        task.title.includes(currentFilterWord)
      ) {
        return task
      }
    })

  return (
    <StyledTasksList>
      <p>
        {tasks_list_filtred.length} Tarefas marcadas como: {currentTag}
        {currentFilterWord ? ` e contém "${currentFilterWord}"` : ''}.
      </p>
      {tasks_list_filtred.map((task) => {
        return <Task key={task.id} {...task} />
      })}
      <StyledBtnAddTask>+</StyledBtnAddTask>
    </StyledTasksList>
  )
}

export default TasksList
