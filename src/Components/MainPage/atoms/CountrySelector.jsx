import styled from 'styled-components';
import { device, FlexDiv, Label } from '../../styled';
import data from '../../../Data/BigMacIndex.json'
import { useRecoilState } from 'recoil'
import { countryState } from '../../../States/countryState'
import { getCountryNameByIsoCode } from '../../../Utils/api';

function CountrySelector({isSelected}) {

  const [country, setCountry] = useRecoilState(countryState);

  const handleSelectChange = (e) => {
    setCountry(e.target.value);
    isSelected(true);
  };

  return (
    <>
    <FlexDiv>
    <Label>여행 국가</Label>
    <SelectorWrapper>
      <Selector className="form-select" value={country} onChange={handleSelectChange}>
        {
          data.map((e)=>{
            return (
              <option value={e.currency_code} key={e.iso_a2}>{getCountryNameByIsoCode(e.iso_a2)}</option>
            )
          })
        }
      </Selector>
    </SelectorWrapper>
    </FlexDiv>
    </>
  )
}


const SelectorWrapper = styled.div`
  text-align : center;
  margin-left: 15px;
  margin-top: 10px;
  @media all and (${device.medium}){
    margin-left:0px;
  }
`

const Selector = styled.select`
  margin: 0 auto;
  font-size:15px;
  height:70px;
  border-radius:10px;
  text-align: center;
  @media all and (${device.medium}){
    font-size: 13px;
    height: 50px;
  }
  @media all and (${device.small}){
    height: 50px;
    font-size: 13px;
  }
`
export default CountrySelector
