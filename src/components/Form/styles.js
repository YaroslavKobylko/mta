import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;

Wrapper.displayName = 'TransactionWrapper';

export const Input = styled.input`
  border-radius: 3px;
  padding: 0 5px;
  min-width: 80px;
  margin-bottom: 3px;
  border: 1px solid #dbdbdb;
  height: 40px;
  outline: none;
  font-size: 14px;
`;

Input.displayName = 'Input';

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

Row.displayName = 'Row';

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  overflow: hidden;

  &:hover::before {
    transform: scaleX(1);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.475s;
  }
`;

export const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
`;

export const Comment = styled.input`
  min-height: 45px;
  line-height: 1.5;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  width: 190px;
  margin: 0;
  border: 1px solid #dbdbdb;
  outline: none;
  height: 40px;
  font-size: 14px;
`;

Comment.displayName = 'Comment';

