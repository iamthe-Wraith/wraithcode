import styled from 'styled-components';
import { AbsoluteCenter } from '../../styles/styles';

export const ComingSoonContainer = styled.div`
  ${AbsoluteCenter}

  * {
    text-align: center;
  }

  .be-there-soon {
    display: block;
    width: 90vw;
    max-width: 250px;
    margin: 0 auto 50px;
  }

  h1 {
    margin-bottom: 1rem;
  }
`
