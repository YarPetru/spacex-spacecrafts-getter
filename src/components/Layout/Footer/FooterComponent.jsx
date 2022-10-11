import { useMatchMedia } from 'hooks';
import Container from '../Container';
import { Footer } from './FooterComponent.styled';

const FooterComponent = () => {
  const { isDesktop } = useMatchMedia();
  return (
    isDesktop && (
      <Footer>
        <Container>All right reserved &copy;</Container>
      </Footer>
    )
  );
};

export default FooterComponent;
