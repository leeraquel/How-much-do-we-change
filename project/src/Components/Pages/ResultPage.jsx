import ResultPage from "../ResultPage/template/ResultPage";
import { useRecoilState } from "recoil";
import { countryState } from "../../States/countryState";
import { daysState } from "../../States/daysSate";
import { nightsState } from "../../States/nightsState";
import { typeState } from "../../States/typeState";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { convertStringToNumber } from "../../Utils/api";

const Result = () => {
  const [searchParams] = useSearchParams();
  const [country, setCountry] = useRecoilState(countryState);
  const [days, setDays] = useRecoilState(daysState);
  const [nights, setNights] = useRecoilState(nightsState);
  const [type, setType] = useRecoilState(typeState);


  useEffect(() => {
    setCountry(searchParams.get('country'));
    setDays(convertStringToNumber(searchParams.get('days')));
    setNights(convertStringToNumber(searchParams.get('nights')))
    setType(convertStringToNumber(searchParams.get('type')))
  },[])
  // Get the query params from the URL

  const allVariablesReady = country && days && nights && type;
  return (
    <div>
      { allVariablesReady && (
        <ResultPage/>
      )}
    </div>
  );
};

export default Result