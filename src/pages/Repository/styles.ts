import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    color: #a8a8b3;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const RepositoryInfo = styled.section`
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  header {
    display: flex;
    align-items: center;
    margin-top: 80px;

    div {
      margin-left: 30px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        font-size: 20px;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
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
