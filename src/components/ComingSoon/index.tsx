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
      <img
        className='be-there-soon'
        src="https://s3.us-east-1.wasabisys.com/wraithcode/be-there-soon.png"
        alt="bitmoji driving cartoon car with the words Be There Soon displayed over him"
      />
      <H1>wraithcode coming soon...</H1>
      <p>please check back later.</p>
    </ComingSoonContainer>
  );
}
