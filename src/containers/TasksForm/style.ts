import { styled } from 'styled-components'

const StyledTasksForm = styled.main`
  padding: 40px;
  margin: auto;
  width: 540px;

  #form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    input,
    textarea {
      border-radius: 8px;
      border: 1px solid #666;
      padding: 8px 24px;
      font-size: 14px;
    }
    textarea {
      height: 180px;
      resize: none;
    }
  }

  #priority {
    display: flex;
    gap: 8px;

    label {
      display: block;
    }

    span {
      padding-left: 2px;
    }
  }
`

export default StyledTasksForm
