import { ButtonWrapper, Button } from "../../styled"
import Modal from '../Modal/Modal'
import styled from 'styled-components'
import {useState} from 'react'

function HowtoCalcBtn() {
  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal() {
    setOpenModal(true);
  }
  return (
    <>
    <ButtonWrapper>
      <CalButton type="button" className="btn btn-light"
      onClick={handleOpenModal}>
      how to calculate 끼니?</CalButton>
    </ButtonWrapper>
    {openModal && <Modal openModal={setOpenModal}/>}
    </>
  )
}

const CalButton = styled(Button)`
  font-size: 10px;
  margin-bottom: 20px;
`


export default HowtoCalcBtn;
