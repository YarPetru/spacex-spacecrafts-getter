import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: white;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px;
`;

export const MainSection = styled.main`
  /* height: 100vh; */
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.transparentBackground};
  height: calc(100vh - 50px); */
`;
