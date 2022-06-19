import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: radial-gradient(${({theme}) => `circle at top left, ${theme.colors.primary}22, transparent 50%`}),
    radial-gradient(${({theme}) => `circle at bottom right, ${theme.colors.highlight1}22, transparent 50%`});

  @media (min-width: 768px) {
    background: radial-gradient(${({theme}) => `circle at top left, ${theme.colors.primary}22, transparent 40%`}),
      radial-gradient(${({theme}) => `circle at bottom right, ${theme.colors.highlight1}22, transparent 40%`});
  }
`
