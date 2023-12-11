import { useState } from 'react'

import * as enums from '../../utils/enums/Task'

import { StyledBtnSalvar } from '../../components/TaskBtn/StyledBtn'
import StyledTasksForm from './style'

function TasksForm() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  return (
    <StyledTasksForm>
      <h3>Nova tarefa</h3>
      <div id="form">
        <input
          type="text"
          placeholder="Título"
          defaultValue={titulo}
          onChange={(evt) => setTitulo(evt.target.value)}
        />
        <textarea
          placeholder="Descrição"
          defaultValue={descricao}
          onChange={(evt) => setDescricao(evt.target.value)}
        />
        <div>
          <p>Prioridade</p>
          <div id="priority">
            <label>
              <input
                type="radio"
                name="priority"
                value={enums.PRIORITY.NORMAL}
                defaultChecked
                onChange={(evt) => console.log(evt.target.value)}
              />
              <span>Normal</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={enums.PRIORITY.IMPORTANTE}
                onChange={(evt) => console.log(evt.target.value)}
              />
              <span>Importante</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={enums.PRIORITY.URGENTE}
                onChange={(evt) => console.log(evt.target.value)}
              />
              <span>Urgente</span>
            </label>
          </div>
        </div>
        <div>
          <StyledBtnSalvar>Cadastrar</StyledBtnSalvar>
        </div>
      </div>
    </StyledTasksForm>
  )
}

export default TasksForm
