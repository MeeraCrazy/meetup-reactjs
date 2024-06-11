import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const HomeHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const HomePara = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Button = styled.button`
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
  margin: 20px;
`
export const Image = styled.img`
  height: 350px;
  width: 50%;
  margin-top: 30px;
`

export const Name = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Topic = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 10px;
`

export default HomeContainer
