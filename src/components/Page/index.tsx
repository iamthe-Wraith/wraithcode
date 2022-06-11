import React, { useEffect } from 'react';
import { PageContainer } from './styles';

interface IProps {
  children: React.ReactNode;
  className: string;
  title?: string;
}

export const Page: React.FC<IProps> = ({
  children,
  className = '',
  title,
}) => {
  useEffect(() => {
    document.title = `${!!title ? `${title} - ` : ''}Wraithcode`;
  }, []);

  return (
    <PageContainer className={ className }>
      { children }
    </PageContainer>
  );
}
