import styled from 'styled-components';

const Header = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const AppHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Span = styled.span`
  color: ${({ theme }) => theme.text};
`;

const AppLink = styled.a`
  color: ${({ theme }) => theme.link};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text};
`;

export { Header, AppLogo, AppHeader, Span, AppLink, Text };
