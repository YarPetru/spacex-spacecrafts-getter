import Container from '../Container';

import { Header } from './HeaderComponent.styled';

const HeaderComponent = ({ children }) => {
  return (
    <Header>
      <Container>{children}</Container>
    </Header>
  );
};

export default HeaderComponent;
