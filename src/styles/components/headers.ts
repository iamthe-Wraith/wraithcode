import styled, { css } from 'styled-components';
import { PrimaryFont } from '../styles';

const _Base = css`
  ${ PrimaryFont }
  color: ${({theme}) => theme.colors.gray9};
`;

export const _H1 = css`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 2.625rem;
`;

export const _H2 = css`
  font-size: 2rem;
  font-weight: 800;
  line-height: 2rem;
`;

export const _H3 = css`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

export const _H4 = css`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

export const _H5 = css`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
`;


export const H1 = styled.h1`
  ${_Base}
  ${_H2}

  @media (min-width: 992px) {
    ${_H1}
  }
`;

export const H2 = styled.h2`
  ${_Base}
  ${_H3}

  @media (min-width: 992px) {
    ${_H2}
  }
`;

export const H3 = styled.h3`
  ${_Base}
  ${_H4}

  @media (min-width: 992px) {
    ${_H3}
  }
`;

export const H4 = styled.h4`
  ${_Base}
  ${_H5}

  @media (min-width: 992px) {
    ${_H4}
  }
`;

export const H5 = styled.h5`
  ${_Base}
  ${_H5}
`;
