import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
