import { Outlet } from 'react-router-dom';

import {
  Header,
  Container,
  Navigation,
  StyledNavLink,
  LogoutButton,
  MainMenuWrapper,
  AuthMenuWrapper,
  MainSection,
  // Footer,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <MainMenuWrapper>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="dragons">Dragons</StyledNavLink>
            </MainMenuWrapper>
            <AuthMenuWrapper>
              <StyledNavLink to="signup">Signup</StyledNavLink>
              <StyledNavLink to="login">Login</StyledNavLink>
              <LogoutButton onClick={() => console.log('выйти')}>
                Logout
              </LogoutButton>
            </AuthMenuWrapper>
          </Navigation>
        </Container>
      </Header>
      <MainSection>
        <Container>
          <Outlet />
        </Container>
      </MainSection>
      {/* <Footer>
        <Container>All right reserved</Container>
      </Footer> */}
    </>
  );
};

export default Layout;
