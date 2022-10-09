import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { getIsLoggedIn } from 'redux/auth';
import { useMatchMedia } from 'hooks';

import {
  Header,
  Container,
  Navigation,
  StyledNavLink,
  LogoutButton,
  MainMenuWrapper,
  AuthMenuWrapper,
  MainSection,
  StyledIcon,
  Footer,
} from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const { isMobile, isDesktop } = useMatchMedia();

  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <MainMenuWrapper>
              <StyledNavLink to="/" exact="true">
                <StyledIcon size="24" />
                {!isMobile && <> Home</>}
              </StyledNavLink>
              {isLoggedIn && (
                <StyledNavLink to="dragons">Dragons</StyledNavLink>
              )}
            </MainMenuWrapper>

            <AuthMenuWrapper>
              {!isLoggedIn && (
                <>
                  <StyledNavLink to="signup">Signup</StyledNavLink>
                  <StyledNavLink to="login">Login</StyledNavLink>
                </>
              )}

              {isLoggedIn && (
                <LogoutButton onClick={onLogout}>Logout</LogoutButton>
              )}
            </AuthMenuWrapper>
          </Navigation>
        </Container>
      </Header>
      <MainSection>
        <Container>
          <Outlet />
        </Container>
      </MainSection>
      {isDesktop && (
        <Footer>
          <Container>All right reserved &copy;</Container>
        </Footer>
      )}
    </>
  );
};

export default Layout;
