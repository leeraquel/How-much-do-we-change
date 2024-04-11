import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { countryState } from "../../../States/countryState";
import { daysState } from "../../../States/daysSate";
import { nightsState } from "../../../States/nightsState";
import { typeState } from "../../../States/typeState";
import CountrySelector from "../atoms/CountrySelector";
import DurationInput from "../atoms/DurationInput";
import TypeRadio from "../atoms/TypeRadio";
import styled from 'styled-components'
import { ButtonWrapper, Button, Div } from "../../styled";
import { useEffect } from "react";

function ConditionsForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSelected, setSelected] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [isButtonActivated, setIsButtonActivated] = useState(false)

  const handleButtonActivation = () => {
    setIsButtonActivated(isSelected && isInput && isChecked)
  }

  useEffect(() => {
    handleButtonActivation()
  }, [isSelected, isInput, isChecked]);

  const [country] = useRecoilState(countryState);
  const [days] = useRecoilState(daysState);
  const [nights] = useRecoilState(nightsState);
  const [type] = useRecoilState(typeState);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams((prevParams) => {
      prevParams.set('country', country);
      prevParams.set('nights', nights);
      prevParams.set('days', days);
      prevParams.set('type', type);
      return prevParams;
    });

    const url = `/result?${searchParams.toString()}`;
    window.location.href = url;
  };

  return (
    <Form
    onSubmit={handleSubmit}
    >
      <Div>
        <CountrySelector isSelected={setSelected} />
      </Div>
      <Div>
        <DurationInput isInput={setIsInput} />
      </Div>
      <Div>
      <TypeRadio isChecked={setIsChecked}/>
      </Div>
      <ButtonWrapper>
        <SubmitButton disabled={!isButtonActivated} type="submit" className="btn btn-outline-primary btn-lg">
          결과 보러 가기
        </SubmitButton>
      </ButtonWrapper>

    </Form>
  );
};

const SubmitButton = styled(Button)`
  width: 80%;
  font-size: 15px;
  background-color: white;
  margin: 20px 0px;
  padding: 15px 0px;
`
const Form = styled.form`
  padding-top: 20px;
`

export default ConditionsForm