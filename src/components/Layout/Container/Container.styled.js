import styled from 'styled-components';

import device from 'styles/device';

export const StyledContainer = styled.div`
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
