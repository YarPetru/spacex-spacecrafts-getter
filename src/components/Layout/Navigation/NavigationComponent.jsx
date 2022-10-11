import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth';
import { useMatchMedia } from 'hooks';
import LogoutModal from 'components/Modal/LogoutModal';

import {
  Navigation,
  StyledNavLink,
  LogoutButton,
  MainMenuWrapper,
  AuthMenuWrapper,
  StyledIcon,
} from './NavigationComponent.styled';

const NavigationComponent = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const { isMobile } = useMatchMedia();

  //   modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navigation>
        <MainMenuWrapper>
          <StyledNavLink to="/" exact="true">
            <StyledIcon size="24" />
            {!isMobile && <> Home</>}
          </StyledNavLink>
          {isLoggedIn && <StyledNavLink to="dragons">Dragons</StyledNavLink>}
        </MainMenuWrapper>

        <AuthMenuWrapper>
          {!isLoggedIn && (
            <>
              <StyledNavLink to="/signup">Signup</StyledNavLink>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </>
          )}

          {isLoggedIn && (
            <LogoutButton onClick={toggleModal}>Logout</LogoutButton>
          )}
        </AuthMenuWrapper>
      </Navigation>
      {isModalOpen && <LogoutModal onClose={toggleModal} />}
    </>
  );
};

export default NavigationComponent;
