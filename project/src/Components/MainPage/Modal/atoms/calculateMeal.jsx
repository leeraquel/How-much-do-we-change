import styled from 'styled-components'
import {Div, FlexDiv, FilledBreakfast, FilledLunch, MealBox, DayBox, FilledDinner} from '../../../styled'

function CalculateMeal(){

  return(
    <MealContentWrapper>
      <ModalDiv>
        <ModalFlexDiv>
          <ModalDiv>
            <DurationType>
              1박 2일
            </DurationType>
            <BasicCalculation>
              기본 4끼
            </BasicCalculation>
          </ModalDiv>
          <MealBox>
            <DayBox>
              <UnFilledBreakfast>breakfast</UnFilledBreakfast>
              <FilledLunch>lunch</FilledLunch>
              <FilledDinner>dinner</FilledDinner>
            </DayBox>
            <DayBox>
            <FilledBreakfast>breakfast</FilledBreakfast>
              <FilledLunch>lunch</FilledLunch>
              <UnFilledDinner>dinner</UnFilledDinner>
            </DayBox>
          </MealBox>
        </ModalFlexDiv>
        <ModalFlexDiv>
          <ModalDiv>
            <DurationType>
              1박 3일
            </DurationType>
            <BasicCalculation>
              출발일 ・ 도착일 1끼
            </BasicCalculation>
          </ModalDiv>
          <MealBox>
            <DayBox>
            <UnFilledBreakfast>breakfast</UnFilledBreakfast>
              <UnFilledLunch>lunch</UnFilledLunch>
              <FilledDinner>dinner</FilledDinner>
            </DayBox>
            <DayBox>
            <FilledBreakfast>breakfast</FilledBreakfast>
              <FilledLunch>lunch</FilledLunch>
              <FilledDinner>dinner</FilledDinner>
            </DayBox>
            <DayBox>
            <FilledBreakfast>breakfast</FilledBreakfast>
              <UnFilledLunch>lunch</UnFilledLunch>
              <UnFilledDinner>dinner</UnFilledDinner>
            </DayBox>
          </MealBox>
        </ModalFlexDiv>
        <ModalFlexDiv>
          <ModalDiv>
            <DurationType>
              2박 3일
            </DurationType>
            <BasicCalculation>
            출발일 ・ 도착일 2끼
            </BasicCalculation>
          </ModalDiv>
          <MealBox>
            <DayBox>
            <UnFilledBreakfast>breakfast</UnFilledBreakfast>
              <FilledLunch>lunch</FilledLunch>
              <FilledDinner>dinner</FilledDinner>
            </DayBox>
            <DayBox>
              <FilledBreakfast>breakfast</FilledBreakfast>
              <FilledLunch>lunch</FilledLunch>
              <FilledDinner>dinner</FilledDinner>
            </DayBox>
            <DayBox>
            <FilledBreakfast>breakfast</FilledBreakfast>
              <FilledLunch>lunch</FilledLunch>
              <UnFilledDinner>dinner</UnFilledDinner>
            </DayBox>
          </MealBox>
        </ModalFlexDiv>
      </ModalDiv>
    </MealContentWrapper>

  )
}

const MealContentWrapper = styled.div`

`
const ModalDiv = styled(Div)`
  margin-bottom: 10px;

`

const ModalFlexDiv = styled(FlexDiv)`
  justify-content: left;
`

const DurationType = styled.div`
  text-align: center;
  border: solid 1px #d0d0d0;
  border-radius: 5px;
  padding: 5px 0px;
  min-width: 150px;


`
const BasicCalculation = styled.div`
  text-align: center;
  border: solid 1px #d0d0d0;
  border-radius: 5px;
  padding: 5px 0px;
  min-width: 150px;
  font-size: 12px;
`
const UnFilledBreakfast = styled(FilledBreakfast)`
  background: none;
  border: dashed 1px #d0d0d0;
`
const UnFilledLunch = styled(FilledLunch)`
  background: none;
  border: dashed 1px #d0d0d0;
`
const UnFilledDinner = styled(FilledDinner)`
  background: none;
  border: dashed 1px #d0d0d0;
`

export default CalculateMeal