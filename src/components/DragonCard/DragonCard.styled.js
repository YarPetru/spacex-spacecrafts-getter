import styled from 'styled-components';
import device from 'styles/device';
import { StyledNavButton } from 'components/CommonComponents/CommonComponets.styled';

export const CardWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 720px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.transparentBackground};
  box-shadow: ${({ theme }) => theme.shadows.card};
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
  @media ${device.mobile} {
    width: 240px;
  }

  @media ${device.tablet} {
    width: 400px;
  }
`;

export const Description = styled.p`
  text-align: justify;
`;

export const WikiLink = styled.a`
  text-decoration: none;

  transition: ${({ theme }) => theme.transition.transitionFunction};

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const ParametersList = styled.ul``;

export const ParametersItem = styled.li``;

export const StyledLink = styled(StyledNavButton)`
  position: absolute;
  @media ${device.mobile} {
    right: 20px;
    top: 224px;
  }

  @media ${device.tablet} {
    top: 20px;
  }

  @media ${device.desktop} {
  }
`;
