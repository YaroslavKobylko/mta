import styled, { css } from 'styled-components';

const media375 = (...args) => css`
  @media (max-width: 450px) {
    ${css(...args)};
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #12141d 100%);
`;

export const Wrapper = styled.div`
  min-width: 436px;
  width: 100%;
  height: 85vh;
  padding: 64px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  background: #12141d;

  ${media375`
  min-width: auto;
  `}
`;

export const TransactionDate = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Comment = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const LampContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

Wrapper.displayName = 'TransactionWrapper';
