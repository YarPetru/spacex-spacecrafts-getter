import styled from 'styled-components';
import { StyledNavButton } from 'components/CommonComponents/CommonComponets.styled';
import device from 'styles/device';

export const GreetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  border-radius: ${p => p.theme.borders.mainBorderRadius};
  background-color: ${p => p.theme.colors.transparentBackground};

  @media ${device.mobile} {
    font-size: 14px;
    height: 360px;
    padding: 20px;
  }

  @media ${device.tablet} {
    height: 440px;
    padding: 40px;
    font-size: 20px;
  }

  @media ${device.desktop} {
    height: 520px;
  }
`;

export const AuthButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.h2`
  text-align: center;

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    font-size: 24px;
    margin-bottom: 60px;
  }

  @media ${device.desktop} {
  }
`;

export const InfoParagraph = styled.p`
  text-align: center;
  margin-bottom: ${props => (props.isNearAuthLinks ? '10px' : '40px')};
`;

export const StyledLink = styled(StyledNavButton)`
  display: inline-block;
`;

export const AuthButton = styled(StyledNavButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    min-width: 100px;
  }

  @media ${device.tablet} {
    min-width: 120px;
  }

  @media ${device.desktop} {
  }
`;
