import { useSearchParams } from 'react-router-dom';
import { convertStringToNumber } from '../../../Utils/api';
import { ResultValue, Label, RowFlexDiv } from '../../styled';

function DaysAndNights() {
  const [searchParams] = useSearchParams();
  const days = convertStringToNumber(searchParams.get('days'));
  const nights = convertStringToNumber(searchParams.get('nights'));

  return (
    <RowFlexDiv>
      <ResultValue>{nights}</ResultValue>
      <Label>박 </Label>
      <ResultValue>{days}</ResultValue>
      <Label>일동안</Label>
    </RowFlexDiv>
  )

}

export default DaysAndNights