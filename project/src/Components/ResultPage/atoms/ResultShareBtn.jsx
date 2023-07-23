import React from 'react';
import { copyToClipboard } from '../../../Utils/api';
import { Button, ButtonWrapper, Div} from '../../styled';
import styled from 'styled-components'

function ShareResultBtn() {
  const handleCopyClick = () => {
    copyToClipboard()
      .then(() => {
        alert('클립보드에 링크가 복사되었습니다!');

      })
      .catch((error) => {
        console.error('Failed to copy URL to clipboard:', error);

      });
  };

  return (
    <ShareButtonWrapper>
      <ButtonWrapper>
        <ShareButton
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleCopyClick}
        >
          결과 친구에게 공유하기
        </ShareButton>
      </ButtonWrapper>
    </ShareButtonWrapper>
  );
}

const ShareButtonWrapper = styled(Div)`
  margin-bottom: 10px;
`

const ShareButton = styled(Button)`
  width: 70%;
  padding: 20px;
  background-color: white;
  border-color: skyblue;
  color: #2694ef;
`
export default ShareResultBtn;
