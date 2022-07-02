import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Container = styled.form`
  width: 100%;
  max-width: 22.25em;
  margin: 0 auto;
  display: flex;
  gap: 1.25em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 0.813rem;
    line-height: 1.5rem;
    letter-spacing: 0.088rem;
    font-weight: 300;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
  input[type='text'] {
    width: 100%;
    height: 3.75em;
    border: 2px solid ${(props) => props.theme.colors.grey};
    border-radius: 0.625em;
    padding: 0 1.25em;
    transition: 0.5s;
    outline: none;
  }
  input[type='text']:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  input {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 0.938rem;
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }
  textarea {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme.colors.grey};
    border-radius: 0.625em;
    padding: 1.25em;
    transition: 0.5s;
    outline: none;
    resize: none;
  }
  textarea:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  textarea {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 0.938rem;
  }
  textarea::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`

export const Dropdown = styled.div`
  width: 100%;
  position: relative;
  .dropdown-selection {
    width: 100%;
    height: 3.75em;
    display: flex;
    align-items: center;
    border: 2px solid ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.dark};
    cursor: pointer;
    border-radius: 0.625em;
    padding: 0 1.25em;
    transition: 0.5s;
    outline: none;
    font-size: 0.938rem;
    justify-content: space-between;
  }
  .dropdown-selection::after {
    display: block;
    content: '';
    width: 0.3125em;
    height: 0.3125em;
    border-right: 0.125em solid ${(props) => props.theme.colors.dark};
    border-bottom: 0.125em solid ${(props) => props.theme.colors.dark};
    transform: rotate(45deg);
    transition: all 300ms;
  }
  .dropdown-selection.visible::after {
    margin-top: 2.5px;
    transform: rotate(-45deg);
  }
`

export const ItemsHolder = styled.div`
  width: 100%;
  border-radius: 0.5em;
  padding: 0.375em;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 138%;
  &::after {
    content: '';
    position: absolute;
    top: -0.625em;
    left: 1.25em;
    border-top: none;
    border-right: 0.625em solid transparent;
    border-left: 0.625em solid transparent;
    border-bottom: 0.625em solid ${(props) => props.theme.colors.white};
  }
`

export const DropDownItem = styled.div`
  padding: 0.75em 0.625em;
  border-radius: 0.375em;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
  font-weight: 500;
  transition: ease 600ms;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey100};
  }
`
