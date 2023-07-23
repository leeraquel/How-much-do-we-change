import CountryNameComponent from "../atoms/CountryName";
import DaysAndNights from "../atoms/DaysAndNights";
import BudgetType from "../atoms/BudgetType";
import BudgetResult from "../atoms/BudgetResult";
import CurrencyRate from "../atoms/CurrencyRate";
import ShareResultBtn from "../atoms/ResultShareBtn";
import LocalBigMacPrice from "../atoms/LocalBigMacPrice";
import RetryBtn from "../atoms/RetryBtn";
import Title from "../../MainPage/atoms/MainTitle";
import { ContentSection, SectionWrapper, device, FlexDiv, Div} from "../../styled";
import styled from "styled-components";

function ResultPage() {
  return (
    <ResultContentSection>
      <ResultSectionWrapper>
        <Title></Title>
        <ResultSection>
          <FlexDiv>
            <CountryNameComponent/>
            <DaysAndNights/>
          </FlexDiv>
          <Div>
            <BudgetType/>
          </Div>
          <Div>
            <BudgetResult/>
          </Div>
          <Div>
            <LocalBigMacPrice/>
            <CurrencyRate/>
          </Div>
          <Div>
            <ShareResultBtn/>
          </Div>
          <Div>
            <RetryBtn/>
          </Div>
        </ResultSection>
      </ResultSectionWrapper>
    </ResultContentSection>
  )
}

const ResultSection = styled.section`
  padding: 40px 0px;

  @media all and (${device.medium}){
    padding-top: 20px;
  }
`

const ResultSectionWrapper = styled(SectionWrapper)`
  height: 100%;
`

const ResultContentSection = styled(ContentSection)`
  height: 100%
`

export default ResultPage