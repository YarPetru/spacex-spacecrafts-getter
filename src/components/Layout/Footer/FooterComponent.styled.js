import styled from 'styled-components';
import device from 'styles/device';

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
