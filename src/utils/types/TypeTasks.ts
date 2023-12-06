import * as enums from '../enums/Task'
export type TaskProps = {
  id: string
  title: string
  description: string
  priority: enums.PRIORITY
  status: enums.STATUS
}

export type FilterCardsProps = {
  counter: string
  description: string
}
