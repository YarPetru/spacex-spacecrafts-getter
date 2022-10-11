import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiRocketFlight } from 'react-icons/gi';

import device from 'styles/device';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.mainBackground};
  color: white;
  font-weight: 500;
`;

export const StyledIcon = styled(GiRocketFlight)`
  color: currentColor;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 4px 6px;
  color: ${({ theme }) => theme.colors.primaryFont};
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :not(:last-child) {
    margin-right: 20px;
  }

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  /* &.active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  } */
`;

export const LogoutButton = styled.button`
  padding: 4px 6px;
  border: 2px solid ${({ theme }) => theme.colors.mainBackground};
  outline: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover {
    color: ${({ theme }) => theme.colors.accent};
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  }
`;

export const MainMenuWrapper = styled.div``;
export const AuthMenuWrapper = styled.div``;

export const Container = styled.div`
  margin: 0 auto;

  @media ${device.mobile} {
    width: 320px;
    padding: 20px 20px;
  }

  @media ${device.tablet} {
    width: 768px;
    padding: 20px 16px;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding: 20px 20px;
  }
`;

export const MainSection = styled.main`
  width: 100%;
`;

export const Footer = styled.footer`
  position: fixed;
  z-index: -1;
  bottom: 0px;
  right: 0px;
  left: 0px;
  color: ${({ theme }) => theme.colors.mainBackground};
  background-color: ${({ theme }) => theme.colors.darkblue};

  @media ${device.tablet} {
    height: 80px;
  }

  @media ${device.desktop} {
  }
`;
