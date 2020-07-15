import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-family: Roboto, 'sans-serif';
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;

  margin-top: 100px;
  width: 433px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 710px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    background: #ffffff;
    border-radius: 5px 0 0 5px;
    color: #a8a8b3;
    font-size: 20px;
    font-family: Roboto;
    line-height: 23px;
    padding: 25px;
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #ff3030;
        border-right: 0;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 710px;
  margin: 80px 0;

  a {
    background: #fff;
    border-radius: 5px;

    width: 100%;
    padding: 16px;

    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 82px;
      height: 82px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        color: #3d3d4d;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
      }

      p {
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #a8a8b3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #fa3030;
`;
