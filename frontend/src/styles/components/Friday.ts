import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 22.5em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 280px) {
    max-width: 16.25em;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  row-gap: 20px;
`

export const UseFullLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  a {
    color: ${(props) => props.theme.colors.white};
    font-weight: 300;
  }
  .forgotPass {
    font-weight: 400;
  }
`
