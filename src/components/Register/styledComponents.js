import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const RegisterImg = styled.img`
  height: 400px;
  width: 250px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const RegisterHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #7b8794;
  font-size: 12px;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 10px;
`
export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #7b8794;
  font-size: 12px;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 10px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
`
export default RegisterButton
