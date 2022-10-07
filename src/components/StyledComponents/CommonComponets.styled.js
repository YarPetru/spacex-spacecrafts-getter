import styled from 'styled-components';
import { Link } from 'react-router-dom';
import device from 'styles/device';

export const StyledNavButton = styled(Link)`
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.transparentAccent};
  border-radius: ${({ theme }) => theme.borders.buttonsBorderRadius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.button};
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  transition: ${p => p.theme.transition.transitionFunction};

  :hover,
  :focus {
    text-decoration: none;
    color: ${p => p.theme.colors.accent};
  }

  @media ${device.mobile} {
    color: ${p => p.theme.colors.white};
  }

  @media ${device.tablet} {
    color: ${p => p.theme.colors.transparentDarkblue};
  }

  @media ${device.desktop} {
  }
`;
