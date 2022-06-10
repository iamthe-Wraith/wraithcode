import { createGlobalStyle, css } from 'styled-components';

export const PrimaryFont = css`
  font-family: Montserrat;  
`;

export const SecondaryFont = css`
  font-family: Karla;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.colors.gray1};

    &.no-scroll {
      overflow: hidden;
    }
  }

  * {
    ${SecondaryFont}
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray2};
    line-height: 1.3em;
    box-sizing: border-box;

    &:focus-visible {
      outline: 1px dashed ${({ theme }) => theme.colors.gray2};
      outline-offset: 1px;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 23px;
  }

  ul {
    margin-bottom: 1rem;
    padding-left: 40px;
    list-tyle-type: disc;
  }

  .bold {
    font-weight: bold;
  }
`;

export const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexCenter = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

export const FlexColCenter = css`
  ${FlexCol}
  justify-content: center;
`;

export const FlexHorizontalCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NoScrollBar = css`
  &::-webkit-scrollbar {
    display: none;
  }

  // works in FF
  scrollbar-width: none;
`;

export const TruncateText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FocusVisible = css`
  &:focus-visible {
    outline: ${({ theme }) => `1px dashed ${theme.colors.gray2}`};
    outline-offset: 1px;
  }
`;
