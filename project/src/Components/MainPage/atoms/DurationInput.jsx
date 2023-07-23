import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { device, FlexDiv, Label } from '../../styled'
import { daysState} from '../../../States/daysSate'
import { nightsState } from '../../../States/nightsState'

function DurationInput({isInput}) {
  const [days, setDays] = useRecoilState(daysState)
  const [nights, setNights] = useRecoilState(nightsState)

  const handleNightsChange = (e) => {
    setNights(e.target.value);

  }

  const handleDaysChange = (e) => {
    setDays(e.target.value);
    isInput(true);
  }

  return (
    <FlexDiv>
    <DurationLabel>여행 일정</DurationLabel>
    <DurationWrapper>
      <DurationContent>
        <TextInput type='text'
        className='form-control'
        value={nights}
        onChange={handleNightsChange}
        placeholder='0 이상 숫자만 입력'
        />
        <DurationSpan>박</DurationSpan>
        <TextInput
        className='form-control'
        type='text'
        value={days}
        onChange={handleDaysChange}
        placeholder='0 이상 숫자만 입력'
        ></TextInput>
        <DurationSpan>일</DurationSpan>
      </DurationContent>
    </DurationWrapper>
    </FlexDiv>
  )
}

const DurationWrapper = styled.div`
  margin-top:10px;
`

const DurationContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const DurationLabel = styled(Label)`
  position: relative;
  top: -25px;
  @media all and (${device.medium}){
    top:0
  }
`



const TextInput = styled.input`
  width: 100%;
  min-height: 50px;
  font-size: 16px;
  text-align: center;
  margin: 0 10px;
  @media all and (${device.medium}){
    font-size: 10px;
    min-height: 40px;
  }
`

const DurationSpan = styled.span`
  font-size: 18px;
  text-align: center;
`

export default DurationInput