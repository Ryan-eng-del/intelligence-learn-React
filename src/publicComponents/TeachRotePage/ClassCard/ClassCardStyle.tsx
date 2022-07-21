import styled from 'styled-components'
export const CardWrapper = styled.div`
  background-color: var(--navy);
  width: 200px;
  color: white;
  height: 250px;
  box-shadow: var(--light-navy) 0px 10px 15px;
  transition: transform 300ms;
  &:hover {
    transform: translateY(-6px);
  }
`
export const CardHeadWrapper = styled.div`
  height: 150px;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    display: inline-block;
    height: 100%;
    transition: transform 500ms;
    &:hover {
      transform: scale(1.2);
    }
  }
`
export const CardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  .ant-btn-primary {
    height: 30px;
    border-color: transparent;
    background-color: var(--green-tint);
  }
  .cname {
    font-size: 17px;
  }
  .tname {
    margin-bottom: 5px;
    font-size: 13px;
  }
`
