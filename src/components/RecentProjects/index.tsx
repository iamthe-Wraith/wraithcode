import React, { useCallback, useContext } from 'react';
import { RecentProjectsContainer } from './styles';

interface IProps {
  className?: string;
  count?: number;
}

export const RecentProjects: React.FC<IProps> = ({
  className = '',
  count = 3,
}) => {
  const renderProjects = useCallback(() => {
    return 'temp recentProjects';
  }, []);

  return (
    <RecentProjectsContainer className={ className }>
      { renderProjects() }
    </RecentProjectsContainer>
  );
}
