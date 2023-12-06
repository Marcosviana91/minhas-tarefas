import { styled } from 'styled-components'

const StyledSideBar = styled.aside`
  width: 224px;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > div {
    position: sticky;
    top: 1rem;
  }

  input {
    width: 192px;
    border-radius: 8px;
    padding: 8px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`
export default StyledSideBar
