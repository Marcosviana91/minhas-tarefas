import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addTask } from '../../store/reducers/taskList'

import * as enums from '../../utils/enums/Task'

import { StyledBtnSalvar } from '../../components/TaskBtn/StyledBtn'
import StyledTasksForm from './style'

function TasksForm() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.PRIORITY.NORMAL)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
                onChange={(evt) =>
                  setPrioridade(evt.target.value as enums.PRIORITY)
                }
              />
              <span>Normal</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={enums.PRIORITY.IMPORTANTE}
                onChange={(evt) =>
                  setPrioridade(evt.target.value as enums.PRIORITY)
                }
              />
              <span>Importante</span>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={enums.PRIORITY.URGENTE}
                onChange={(evt) =>
                  setPrioridade(evt.target.value as enums.PRIORITY)
                }
              />
              <span>Urgente</span>
            </label>
          </div>
        </div>
        <div>
          <StyledBtnSalvar
            onClick={() => {
              if (titulo.length < 5) {
                console.log('Insira um Título maior')
                alert('Insira um Título maior')
                return
              }
              if (descricao.length < 10) {
                console.log('Insira uma Descrição maior')
                alert('Insira uma Descrição maior')
                return
              }

              dispatch(
                addTask({
                  id: '',
                  title: titulo,
                  description: descricao,
                  priority: prioridade,
                  status: enums.STATUS.PENDENTE
                })
              )
              setTitulo('')
              setDescricao('')
              setPrioridade(enums.PRIORITY.NORMAL)
              navigate('/')
            }}
          >
            Cadastrar
          </StyledBtnSalvar>
        </div>
      </div>
    </StyledTasksForm>
  )
}

export default TasksForm
