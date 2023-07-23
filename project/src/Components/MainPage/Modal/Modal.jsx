import React from 'react';
import styled from 'styled-components';
import CalculateMeal from './atoms/calculateMeal';

function Modal({openModal}) {
  return (
    <Wrapper>
      <div className="modal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">How to calculate 끼니?</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => {openModal(false)}}
              />
            </div>
            <div className="modal-body">
              <CalculateMeal/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={(e) => {openModal(false)}}
              >
                알겠습니다!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .modal {
    display: block;
    position: fixed;
    z-index: 1050;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .modal-dialog {
    position: relative;
    width: auto;
    pointer-events: none;
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;

  }

  .modal-header {
    padding: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #f7f7f7;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  .modal-title {
    font-size: 12px;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0.5rem;
  }

  .modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 auto;
    padding: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #f7f7f7;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .btn-close {
    float: right;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
  }

  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.75;
  }

  .btn-secondary{
    font-size: 10px;
  }
`;

export default Modal;
