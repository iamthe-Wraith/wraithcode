import React from 'react';
import { HomeContainer } from './styles';

interface IProps {
  className?: string;
}

export const Home: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <HomeContainer className={ className }>
      temp Home
    </HomeContainer>
  );
}
