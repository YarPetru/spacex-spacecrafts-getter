import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiRocketFlight } from 'react-icons/gi';

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
