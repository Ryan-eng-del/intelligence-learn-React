import styled from 'styled-components'
export const ClassInfoNavWrapper = styled.div`
  border-radius: 10px;
`
export const ClassInfoWrapper = styled.div`
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 5px solid var(--lightest-navy);
  border-radius: 10px;
  .username {
    color: white;
    padding-top: 8px;
  }
  animation: 0.7s fadedown ease forwards;
`
export const ClassInfoMenuWrapper = styled.div`
  border-radius: 10px;
  animation: 0.7s fadeup ease forwards;
`
