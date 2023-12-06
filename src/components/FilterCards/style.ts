import { styled } from 'styled-components'

export const StyledCard = styled.div`
  border: 1px solid #a1a1a1;
  border-radius: 8px;
  width: 92px;
  height: 64px;
  color: #5e5e5e;
  cursor: pointer;

  padding: 8px;
  h2 {
    width: 100%;
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }

  &.active {
    color: #1e90ff;
    border-color: #1e90ff;
  }
`
