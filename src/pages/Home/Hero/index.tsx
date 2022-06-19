import dayjs from 'dayjs';
import React, { useRef } from 'react';
import { withTheme } from 'styled-components';
import { AnglePos, AngleSize } from '../../../components/containers/AngleCorner/styles';
import { IThemeProps } from '../../../styles/theme';
import { DTHeroContent, HeroContainer, HeroContent } from './styles';

interface IProps extends IThemeProps {
  className?: string;
}

const HeroBase: React.FC<IProps> = ({
  className = '',
  theme,
}) => {
  const yearsAsEng = useRef(dayjs().diff(dayjs('Aug 1, 2013'), 'year')).current;
  const text = useRef(`I started coding ${yearsAsEng} years ago...it was the best decision I ever made.`).current;

  return (
    <HeroContainer className={ className }>
      <img
        src='https://s3.us-east-1.wasabisys.com/wraithcode/hi.png'
        alt='bitmoji waving with word Hi above him'
      />
      <HeroContent>
        { text }
      </HeroContent>
      <DTHeroContent
        backgroundColor={ theme.colors.primary }
        borderColor={ theme.colors.primaryDark }
        childrenContainerClassName='dt-hero-container'
        config={[{ position: AnglePos.TopLeft, size: AngleSize.Small }]}
      >
        { text }
      </DTHeroContent>
    </HeroContainer>
  );
};

export const Hero = withTheme(HeroBase);
