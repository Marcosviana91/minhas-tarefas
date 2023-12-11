import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { rmvTask, editTask } from '../../store/reducers/taskList'

import * as enums from '../../utils/enums/Task'

import {
  StyledBtnEditar,
  StyledBtnRemover,
  StyledBtnSalvar,
  StyledBtnCancelar
} from '../../components/TaskBtn/StyledBtn'
import {
  StyledPriorityTag,
  StyledStatusTag
} from '../../components/TaskTags/StyledTags'
import { TaskProps } from '../../utils/types/TypeTasks'
import StyledTask from './style'

function Task(props: TaskProps) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [taskDesc, setTaskDesc] = useState(props.description)

  return (
    <StyledTask id={props.id}>
      <label>
        <input
          type="checkbox"
          checked={enums.STATUS.CONCLUIDO === props.status}
          onChange={(evt) => {
            dispatch(
              editTask({
                ...props,
                status: evt.target.checked
                  ? enums.STATUS.CONCLUIDO
                  : enums.STATUS.PENDENTE
              })
            )
          }}
        />
        <h3 className={isEditing ? 'editing' : ''}>{props.title}</h3>
      </label>
      <div id="tags">
        <StyledPriorityTag prioridade={props.priority}>
          {props.priority}
        </StyledPriorityTag>
        <StyledStatusTag status={props.status}>{props.status}</StyledStatusTag>
      </div>
      <textarea
        id="desc"
        className={isEditing ? 'editing' : ''}
        value={taskDesc}
        onChange={(evt) => setTaskDesc(evt.target.value)}
        disabled={!isEditing}
      />
      <div id="btn">
        {isEditing ? (
          <>
            <StyledBtnSalvar
              onClick={() => {
                setIsEditing(false)
                dispatch(
                  editTask({
                    ...props,
                    description: taskDesc
                  })
                )
              }}
            >
              Salvar
            </StyledBtnSalvar>
            <StyledBtnCancelar
              onClick={() => {
                setTaskDesc(props.description)
                setIsEditing(false)
              }}
            >
              Cancelar
            </StyledBtnCancelar>
          </>
        ) : (
          <>
            <StyledBtnEditar onClick={() => setIsEditing(true)}>
              Editar
            </StyledBtnEditar>
            <StyledBtnRemover
              onClick={() => {
                dispatch(rmvTask(props.id))
              }}
            >
              Remover
            </StyledBtnRemover>
          </>
        )}
      </div>
    </StyledTask>
  )
}

export default Task
