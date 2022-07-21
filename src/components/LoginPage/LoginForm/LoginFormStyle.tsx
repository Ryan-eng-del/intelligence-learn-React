import styled from 'styled-components'
/* LoginFormWrapper */

export const LoginFormWrapper = styled.div`
  margin: 0 auto;
  margin-top: 120px;
  animation: 0.7s fadeleft ease forwards;
  .ant-input-affix-wrapper {
    height: 45px;
  }
  .ant-input-affix-wrapper > input.ant-input {
    padding-left: 12px;
    font-size: 15px;
  }
  @media (min-width: 560px) {
    width: 444px;
    .ant-input-affix-wrapper {
      width: 444px;
    }
  }
  div.forget-password {
    margin: 10px 0 15px 0;
    cursor: pointer;
    color: var(--lightest-slate);
    text-decoration: underline;
    font-family: 'zh-text';
  }
  @media (min-width: 1024px) {
    div.forget-password {
      margin: 15px 0 20px 0;
    }
  }
  @media (min-width: 1280px) {
    div.forget-password {
      font-size: 17px;
      margin: 20px 0 25px 0;
    }
  }
  @media (min-width: 1520px) {
    float: right;
    margin-top: 0px;
  }
`
export const LoginTitle = styled.div`
  color: var(--lightest-slate);
  font-size: 35px;
  text-align: center;
  font-family: 'en-title-medium';
  p {
    border-bottom: 2px solid var(--green);
  }
  @media (min-width: 1024px) {
    font-size: 42px;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 16px;

  @media (min-width: 1024px) {
    .ant-btn-primary {
      font-size: 16px;
      width: 120px;
      height: 42px;
    }
  }
  @media (min-width: 1280px) {
    .ant-btn-primary {
      font-size: 18px;
      width: 130px;
      height: 45px;
    }
  }
`
