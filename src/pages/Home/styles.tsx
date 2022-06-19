import styled from 'styled-components';
import { Page } from '../../components/Page';
import { _H1 } from '../../styles/components/headers';
import { FlexColCenter, FlexHorizontalCenter, PrimaryFont } from '../../styles/styles';

export const Hero = styled.div`
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
    height: 400px;

    img {
      width: 250px;
      margin-left: 25%;
    }
  }
`;

export const HeroContent = styled.p`
  width: 100%;
  margin: 0;
  padding: 0.5rem 1rem;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.gray2};
  box-shadow: 0px 15px 24px -15px ${({theme}) => theme.colors.gray1};
  text-align: center;

  @media (min-width: 768px) {
    ${_H1}
    ${PrimaryFont}
    width: 90vw;
    max-width: 900px;
    padding: 1rem 2rem;
    text-align: center;
  }
`;

export const HomeContainer = styled(Page)``;
