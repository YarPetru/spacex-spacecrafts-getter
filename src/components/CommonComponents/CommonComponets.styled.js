import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
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
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover,
  :focus {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
  }

  @media ${device.mobile} {
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${device.tablet} {
    color: ${({ theme }) => theme.colors.transparentDarkblue};
  }

  @media ${device.desktop} {
  }
`;

export const StyledField = styled(Field)`
  padding: 8px 12px;
  outline: none;
  border-radius: ${({ theme }) => theme.borders.buttonsBorderRadius};
  border: 1px solid ${({ theme }) => theme.colors.inputBackground};
  box-shadow: ${({ theme }) => theme.shadows.input};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
