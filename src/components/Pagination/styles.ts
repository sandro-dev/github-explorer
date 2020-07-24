import styled from 'styled-components';
import { lighten } from 'polished';

interface PageProps {
  page: number;
}

export const Container = styled.div<PageProps>`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: fit-content;
  max-width: 1100px;

  button {
    background: #fff;
    color: #3d3d4d;
    border: 1px solid #e1e4e8;
    padding: 7px 12px;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
  }

  button:nth-child(${props => props.page + 1}) {
    background: #3d3d4d;
    border: 2px solid #fff;
    z-index: 3;
    color: #fff;
    margin: 0 1px;
  }

  button:first-child {
    margin-right: 5px;
  }

  button:last-child {
    margin-left: 5px;
  }
  button:first-child,
  button:last-child {
    padding: 6px 2px;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    color: ${lighten(0.2, '#3D3D4D')};
  }
`;
