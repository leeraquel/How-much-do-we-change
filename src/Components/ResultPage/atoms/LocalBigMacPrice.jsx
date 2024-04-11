import { useRecoilState } from "recoil";
import { countryState } from "../../../States/countryState";
import { getBigMacLocalPrice } from "../../../Utils/api";
import { ResultValue, Label, RowFlexDiv, Div  } from '../../styled';

function LocalBigMacPrice() {
  const [country] = useRecoilState(countryState);
  const localPrice = getBigMacLocalPrice(country);

  return (
    <Div>
    <Label style={{marginBottom:'10px'}}>
      현지 빅맥 가격
    </Label>
    <RowFlexDiv>
      <ResultValue>
        {localPrice}
      </ResultValue>
      <Label>
        {country}
      </Label>
    </RowFlexDiv>
    </Div>
  )


}

export default LocalBigMacPrice;