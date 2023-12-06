import { styled } from 'styled-components'

const StyledTask = styled.div`
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  #desc {
    margin: 16px 0;
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
  }

  #tags,
  label,
  #btn {
    display: flex;
    gap: 8px;
  }
`

export default StyledTask
