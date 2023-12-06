import { configureStore } from '@reduxjs/toolkit'
import taskListReducer from './reducers/taskList'
import filterTaskReducer from './reducers/filterTask'

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
    filterTask: filterTaskReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
