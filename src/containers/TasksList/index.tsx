import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { typeFilterTag, TaskProps } from '../../utils/types/TypeTasks'

import Task from '../Task'
import StyledTasksList from './style'

export function FilterTask(
  //Aplicar as opções de filtro (2 filtros aninhados)
  list_to_filter: TaskProps[],
  tag: typeFilterTag,
  word = ''
) {
  return list_to_filter
    .filter((item) => {
      if (tag == 'todas') {
        return item
      }
      if (item.status == tag || item.priority == tag) {
        return item
      }
    })
    .filter((item) => {
      if (item.description.includes(word) || item.title.includes(word)) {
        return item
      }
    })
}

function TasksList() {
  const currentFilterWord = useSelector(
    (state: RootReducer) => state.filterTask.filterWord
  )
  const currentTag = useSelector(
    (state: RootReducer) => state.filterTask.filterTag
  )
  const tasks_list = useSelector((state: RootReducer) => state.taskList.tasks)
  //Aplicar as opções de filtro (2 filtros aninhados)
  const tasks_list_filtred = FilterTask(
    tasks_list,
    currentTag,
    currentFilterWord
  )

  return (
    <StyledTasksList>
      <p>
        {tasks_list_filtred.length} Tarefas marcadas como: {currentTag}
        {currentFilterWord ? ` e contém "${currentFilterWord}"` : ''}.
      </p>
      {tasks_list_filtred.map((task) => {
        return <Task key={task.id} {...task} />
      })}
    </StyledTasksList>
  )
}

export default TasksList
