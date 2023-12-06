import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskProps } from '../../../utils/types/TypeTasks'
import * as enums from '../../../utils/enums/Task'

type taskListProps = {
  tasks: TaskProps[]
}

const fake_tasks: TaskProps[] = [
  {
    id: 'task_1',
    title: 'Estudar programação',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
    priority: enums.PRIORITY.IMPORTANTE,
    status: enums.STATUS.CONCLUIDO
  },
  {
    id: 'task_2',
    title: 'Estudar React',
    description:
      'Possimus dicta iure molestiae dolores? Qui corrupti aut maxime?',
    priority: enums.PRIORITY.URGENTE,
    status: enums.STATUS.PENDENTE
  },
  {
    id: 'task_3',
    title: 'Estudar Redux',
    description:
      'Iste incidunt in suscipit laboriosam ipsum quas possimus impedit?',
    priority: enums.PRIORITY.NORMAL,
    status: enums.STATUS.PENDENTE
  },
  {
    id: 'task_4',
    title: 'Finalizar esta bagaça',
    description: 'fazer tudo',
    priority: enums.PRIORITY.IMPORTANTE,
    status: enums.STATUS.PENDENTE
  }
]

const initialState: taskListProps = {
  tasks: fake_tasks
}

const taskListSlice = createSlice({
  name: 'tasklist',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskProps>) => {
      state.tasks = [...state.tasks, action.payload]
    },
    rmvTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<TaskProps>) => {
      const temp_tasks_list = state.tasks.map((t) => {
        if (t.id !== action.payload.id) {
          return t
        } else {
          return action.payload
        }
      })
      state.tasks = temp_tasks_list
    }
  }
})

export const { addTask, rmvTask, editTask } = taskListSlice.actions
export default taskListSlice.reducer
