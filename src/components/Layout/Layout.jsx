import { Outlet } from 'react-router-dom';

import HeaderComponent from './Header/HeaderComponent';
import NavigationComponent from './Navigation/NavigationComponent';
import FooterComponent from './Footer/FooterComponent';
import Container from './Container';

import { MainSection } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderComponent>
        <NavigationComponent />
      </HeaderComponent>
      <MainSection>
        <Container>
          <Outlet />
        </Container>
      </MainSection>
      <FooterComponent />
    </>
  );
};

export default Layout;
