import React from 'react';
import { HomeContainer } from './styles';
import { Hero } from './Hero';

interface IProps {
  className?: string;
}

export const Home: React.FC<IProps> = ({ className = '' }) => (
  <HomeContainer className={ className }>
    <Hero />
  </HomeContainer>
);
