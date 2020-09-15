import styled, { css } from 'styled-components';
import ToolTip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  color: #d5d5d5;

  border-radius: 10px;
  border: 1px solid #d7d7d7;

  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #309AD0;
      border-color: #309AD0;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #309AD0;
    `}

  select {
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #232129 inset;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: #f4ede8 !important;
    }

    background: transparent;

    flex: 1;
    border: 0;

    color: #232129;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }



  
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
