import styled from 'styled-components';
import { StyledNavButton } from 'components/StyledComponents/NavButton.styled';
// import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.transparentBackground};

  box-shadow: ${({ theme }) => theme.shadows.card};

  max-width: 720px;
`;

export const CardTitle = styled.h2`
  text-decoration: underline;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const Picture = styled.img`
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borders.secondaryBorderRadius};
`;

export const DescriptionWrapper = styled.div`
  width: 300px;
`;

export const Description = styled.p``;

export const WikiLink = styled.a``;

export const ParametersList = styled.ul``;

export const ParametersItem = styled.li``;

export const StyledLink = styled(StyledNavButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  /* padding: 12px 16px;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.transparentAccent};
  border-radius: ${({ theme }) => theme.borders.buttonsBorderRadius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.button};
  } */
`;
