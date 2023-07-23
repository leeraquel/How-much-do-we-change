import styled from 'styled-components';
import {Button} from "../../styled";


function RetryBtn() {
  const handleRetryClick = () => {
    window.location.href = '/';
  };
  return (
    <>
      <RetryButton type='button' onClick={() => {handleRetryClick()}} className="btn btn-outline-info btn-lg">
        에바다...다시 계산하기
      </RetryButton>
    </>
  )
}

const RetryButton = styled(Button)`
  width: 70%;
  padding: 20px;
  color: #2694ef;
  border-color: skyblue;

`


export default RetryBtn;