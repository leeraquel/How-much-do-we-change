import { Div, Label, ResultValue, RowFlexDiv } from '../../styled'
import { useRecoilState } from 'recoil'
import { countryState } from '../../../States/countryState'
import { exchangeResultState } from '../../../States/exchangeResultState'

function CurrencyRate() {
  const [country] = useRecoilState(countryState);
  const [exchangeResult] = useRecoilState(exchangeResultState);

  return (
    <Div>
      <Label style={{marginBottom:'10px'}}>
      현재 환율
      </Label>
      <RowFlexDiv>
        <ResultValue>1</ResultValue>
        <Label>{country} : </Label>
        <ResultValue>{exchangeResult}</ResultValue>
        <Label>KRW</Label>
      </RowFlexDiv>
    </Div>
  )

}

export default CurrencyRate