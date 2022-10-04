import { Outlet } from 'react-router-dom';

import { Header, Container, MainSection } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>Home</nav>
        </Container>
      </Header>
      <MainSection>
        <Container>
          <Outlet />
        </Container>
      </MainSection>
    </>
  );
};

export default Layout;
