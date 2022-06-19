import React from 'react';
import { HomeContainer } from './styles';
import { Hero } from './Hero';
import { Section } from '../../styles/components/containers';
import { H2 } from '../../styles/components/headers';
import { RecentProjects } from '../../components/RecentProjects';

interface IProps {
  className?: string;
}

export const Home: React.FC<IProps> = ({ className = '' }) => (
  <HomeContainer className={ className }>
    <Hero />
    <Section>
      <H2>Recent Projects</H2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      <RecentProjects />
    </Section>
  </HomeContainer>
);
