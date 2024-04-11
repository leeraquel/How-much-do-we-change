import styled from 'styled-components'
import { device } from '../../styled';


function Title() {

  return (
    <>
      <TitleComponent>얼 마 바 꿔?</TitleComponent>
    </>
  )
}

const TitleComponent = styled.h1`
  color : #000000;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  @media all and (${device.medium}) {
    padding: 0px;
  }
`

export default Title;