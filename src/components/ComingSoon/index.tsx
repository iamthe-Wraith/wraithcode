import React from 'react';
import { H1 } from '../../styles/components/headers';
import { ComingSoonContainer } from './styles';

interface IProps {
  className?: string;
}

export const ComingSoon: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <ComingSoonContainer className={ className }>
      <H1>wraithcode coming soon...</H1>
      <p>please check back later.</p>
    </ComingSoonContainer>
  );
}
