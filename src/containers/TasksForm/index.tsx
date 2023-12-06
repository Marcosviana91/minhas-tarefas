import { StyledBtnSalvar } from '../../components/TaskBtn/StyledBtn'
import StyledTasksForm from './style'

function TasksForm() {
  return (
    <StyledTasksForm>
      <h3>Nova tarefa</h3>
      <div id="form">
        <input type="text" placeholder="Título" />
        <textarea placeholder="Descrição" />
        <div>
          <p>Prioridade</p>
          <div id="priority">
            <label>
              <input type="radio" name="priority" />
              <span>Urgente</span>
            </label>
            <label>
              <input type="radio" name="priority" />
              <span>Importante</span>
            </label>
            <label>
              <input type="radio" name="priority" />
              <span>Normal</span>
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
