import { Label, ResultValue, RowFlexDiv } from "../../styled";
import { getCountryNameByIsoCode,getCountryIsoCodeByCurrencyCode } from "../../../Utils/api";
import { useRecoilState } from "recoil";
import { countryState } from "../../../States/countryState";

function CountryNameComponent () {
  const [country] = useRecoilState(countryState);
  const countryCode = getCountryIsoCodeByCurrencyCode(country);
  const countryName = getCountryNameByIsoCode(countryCode);

  return (
    <RowFlexDiv>
      <ResultValue>
        {countryName}
      </ResultValue>
      <Label>
        에서
      </Label>
    </RowFlexDiv>
  )
}

export default CountryNameComponent
