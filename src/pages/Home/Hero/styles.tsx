import styled, { css } from 'styled-components';
import { AngleCorner } from '../../../components/containers/AngleCorner';
import { _H1 } from '../../../styles/components/headers';
import { FlexColCenter, PrimaryFont } from '../../../styles/styles';

export const HeroContainer = styled.div`
  ${FlexColCenter};
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: url(https://s3.us-east-1.wasabisys.com/wraithcode/blurry-desk.png) no-repeat center center;
  background-size: cover;

  img {
    width: 200px;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    
    img {
      width: 250px;
      margin-left: 25%;
    }
  }
`;

const heroContentStyles = css`
  width: 100%;
  margin: 0;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;

  @media (min-width: 768px) {
    ${_H1}
    ${PrimaryFont}
    width: 96vw;
    max-width: 900px;
    padding: 1rem 2rem;
    text-align: center;
  }
`;

export const DTHeroContent = styled(AngleCorner)`
  ${heroContentStyles};
  display: none;

  .dt-hero-container {
    color: ${({theme}) => theme.colors.gray2};
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const HeroContent = styled.div`
  ${heroContentStyles};
  display: block;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 15px 24px -15px ${({ theme }) => theme.colors.gray1};

  @media (min-width: 768px) {
    display: none;
  }
`;
