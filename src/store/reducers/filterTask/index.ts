import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type typeFilterTag =
  | 'pendente'
  | 'concluida'
  | 'todas'
  | 'urgente'
  | 'importante'
  | 'normal'

type typeFilterState = {
  filterWord: string
  filterTag: typeFilterTag
}

const initialState: typeFilterState = {
  filterWord: '',
  filterTag: 'todas'
}

const filterStateSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    filterByTag: (state, action: PayloadAction<typeFilterTag>) => {
      state.filterTag = action.payload
    },
    filterByWord: (state, action: PayloadAction<string>) => {
      state.filterWord = action.payload
    }
  }
})

export const { filterByTag, filterByWord } = filterStateSlice.actions
export default filterStateSlice.reducer
