import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { device, FlexDiv, Label, RadioDesc } from "../../styled";
import { typeState } from "../../../States/typeState";


const IconURL = 'https://cdn-icons-png.flaticon.com/512/3075/3075935.png'
const checkedIconURL = 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'

function TypeRadio({isChecked}) {
  const [type, setType] = useRecoilState(typeState);

  const handleRadioChange = (e) => {
    setType(e.target.value);
    isChecked(true);
  };

  const getImageUrl = (radioValue) => {
    return type === radioValue ? checkedIconURL : IconURL;
  };


  return (
    <RadioSectionWrapper>
      <TypeLabel>여행 타입</TypeLabel>
      <RadioSection>
        <Radio>
          <label>
            <input
              type="radio"
              value="1"
              checked={type === '1'}
              onChange={handleRadioChange}
              />
              <HamburgerIconWrapper>
            <img src={getImageUrl('1')} alt="Radio 1" className="poor" />
            </HamburgerIconWrapper>
            <Label>초절약</Label>
            <RadioDesc>매 끼니 빅맥 단품처럼! <br/> 편의점 라면도 좋아!</RadioDesc>
          </label>
        </Radio>
        <Radio>
      <label>
        <input
          type="radio"
          value="2"
          checked={type === '2'}
          onChange={handleRadioChange}
          />
          <HamburgerIconWrapper>
        <img src={getImageUrl('2')} alt="Radio 2" className="middle" />
        <img src={getImageUrl('2')} alt="Radio 2" className="middle" />
        </HamburgerIconWrapper>
        <Label>맛집러</Label>
        <RadioDesc>맛집은 가야지! <br/> 빅맥 두 개 값은 감당 가능!</RadioDesc>
      </label>
          </Radio>
          <Radio>
      <label>
        <input
          type="radio"
          value="3"
          checked={type === '3'}
          onChange={handleRadioChange}
          />
          <HamburgerIconWrapper>
        <img src={getImageUrl('3')} alt="Radio 3" className="rich" />
        <img src={getImageUrl('3')} alt="Radio 3" className="rich"/>
        <img src={getImageUrl('3')} alt="Radio 3" className="rich"/>
        </HamburgerIconWrapper>
        <Label>럭셔리</Label>
        <RadioDesc>매 끼니 빅맥 3개! <br/> 좀 모으면 뷔페도 가능!</RadioDesc>
      </label>
      </Radio>
      </RadioSection>
    </RadioSectionWrapper>

  )


}

const RadioSectionWrapper = styled.div`
  margin: 0 auto;

`

const TypeLabel = styled(Label)`
  text-align: center;
  margin-bottom: 5px;
  @media all and (${device.medium}){
    margin-bottom: 3px;
  }
`

const RadioSection = styled(FlexDiv)`
  label {
    padding: 20px 10px 0px;
    background-color: white;
    border: 1px solid #72b6ff;
    border-radius: 30px;
    margin: 10px;
  }
`

const Radio = styled.div`
  input {
    display: none;
  }
`

const HamburgerIconWrapper = styled.div`
  max-width: 200px;
  max-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img{
    width: 33%;
    height: 33%;
    padding: 0 5px;
  }

`

export default TypeRadio