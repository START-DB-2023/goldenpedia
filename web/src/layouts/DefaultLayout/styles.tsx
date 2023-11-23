import { Container } from '@mui/material';
import styled from 'styled-components'

import goldenBook from '../../assets/golden-book.png'

export const BgContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 80vh;
  background-image: url(${goldenBook});
  background-size: 88%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;

  @media (max-width: 900px) {
    background-color: #fff;
    background-image: none;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
`;
