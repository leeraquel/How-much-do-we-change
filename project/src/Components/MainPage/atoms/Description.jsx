import { DescriptionBox, FlexDiv } from "../../styled";

function Description() {

  return (
    <>
    <FlexDiv>
      <DescriptionBox>
        '얼마 바꿔?'는 여행 기간 동안의 식비를
      </DescriptionBox>
      <DescriptionBox>
        현지 빅맥 가격 기준으로 계산해 주는 단순한 도우미입니다.
      </DescriptionBox>
    </FlexDiv>
    <FlexDiv>
      <DescriptionBox>
      여행 갈 국가를 선택하고 일정을 입력해 보세요!
      </DescriptionBox>
      <DescriptionBox>
      여행 스타일에 따른 식비를 알 수 있어요!
      </DescriptionBox>
    </FlexDiv>
    </>
  )
}

export default Description