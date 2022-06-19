import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { Hero, HeroContent, HomeContainer } from './styles';

interface IProps {
  className?: string;
}

export const Home: React.FC<IProps> = ({
  className = '',
}) => {
  const yearsAsEng = useRef(dayjs().diff(dayjs('Aug 1, 2013'), 'year')).current;

  return (
    <HomeContainer className={ className }>
      <Hero>
        <img
          src='https://s3.us-east-1.wasabisys.com/wraithcode/hi.png'
          alt='bitmoji waving with word Hi above him'
        />
        <HeroContent>
          { `I started coding ${yearsAsEng} years ago...it was the best decision I ever made.` }
        </HeroContent>
      </Hero>
    </HomeContainer>
  );
}
