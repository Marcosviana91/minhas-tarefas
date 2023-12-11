import { styled } from 'styled-components'

const StyledTask = styled.div`
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  h3.editing::before {
    content: 'Editando: ';
    font-style: italic;
  }
  #desc {
    margin: 16px 0;
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
    height: 5rem;
    resize: none;
  }
  #desc.editing {
    color: black;
  }

  #tags,
  label,
  #btn {
    display: flex;
    gap: 8px;
  }
`

export default StyledTask
