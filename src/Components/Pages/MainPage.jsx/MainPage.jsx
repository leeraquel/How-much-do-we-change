import Title from "../../MainPage/atoms/MainTitle";
import SubtitleContent from "../../MainPage/atoms/SubTitle";
import ConditionsForm from "../../MainPage/molecular/GetResultButton";
import Description from "../../MainPage/atoms/Description";
import HowtoCalcBtn from "../../MainPage/atoms/HowtoCalcBtn";

import { ContentSection, SectionWrapper} from "../../styled";




function MainPage() {

  return (
    <ContentSection>
      <SectionWrapper>
      <Title></Title>
      <SubtitleContent></SubtitleContent>
      <Description></Description>
      <HowtoCalcBtn/>
      <ConditionsForm></ConditionsForm>
      </SectionWrapper>
    </ContentSection>
  )
}

export default MainPage