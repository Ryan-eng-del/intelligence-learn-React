import styled from 'styled-components'
// 此为左右两侧布局

//整体布局
export const EntireWrapper = styled.div`
padding: 10px, 30px, 0px 10px;
min-width: 1520px;
font-size: 16px;
font-family: 'zh-light';
letter-spacing: 2px;
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
.ant-menu-item-selected {
background-color: rgb(24, 144, 255);
}
`

// 此为左侧整体
export const LeftSideWrapper = styled.div`
  border-radius: 10px;
`

// 此为左侧上半部分
export const LeftInfoWrapper = styled.div`
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

// 此为左侧下半部分
export const LeftMenuWrapper = styled.div`
  border-radius: 10px;
  animation: 0.7s fadeup ease forwards;
`

//此为右侧部分
export const RightSideWrapper = styled.div`
  background-color: rgb(0, 21, 41);
  animation: 0.7s fadeleft ease forwards;
  height: 700px;
  box-shadow: var(--lightest-navy) 0px 0px 30px 4px;
`
