import { translateType } from "../../../Utils/api";
import { useRecoilState } from "recoil";
import { calculateMeals } from "../../../Utils/api";
import { daysState } from "../../../States/daysSate";
import { nightsState } from "../../../States/nightsState";
import { typeState } from "../../../States/typeState";
import { FlexDiv, RowFlexDiv, Label, ResultValue } from "../../styled";

function BudgetType() {

  const [type] = useRecoilState(typeState);
  const [days] = useRecoilState(daysState);
  const [nights] = useRecoilState(nightsState);

  const meals = calculateMeals(nights, days);
  const typeBody = translateType(type)

  return (
    <FlexDiv>
      <RowFlexDiv>
      <ResultValue className="typeContent">
        {typeBody}
      </ResultValue>
      <Label>형으로</Label>
      </RowFlexDiv>
      <RowFlexDiv>
      <ResultValue>{meals}</ResultValue>
      <Label>끼 먹을 시</Label>
      </RowFlexDiv>
    </FlexDiv>
  )
}

export default BudgetType