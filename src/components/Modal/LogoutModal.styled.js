import styled from 'styled-components';
import device from 'styles/device';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.transparentDarkblue};
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;

  max-height: 90%;
  color: ${({ theme }) => theme.colors.primaryFont};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-radius: ${({ theme }) => theme.borders.mainBorderRadius};
  text-align: center;

  @media ${device.mobile} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 460px;
  }

  @media ${device.desktop} {
  }
`;

export const ConfirmationText = styled.p`
  margin-bottom: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ConfirmButton = styled.button`
  min-width: 80px;
  /* outline: none; */
  border: 1px solid ${({ theme }) => theme.colors.primaryFont};
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.transparentAccent};
  border-radius: ${({ theme }) => theme.borders.buttonsBorderRadius};

  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transition.transitionFunction};
  cursor: pointer;

  :hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.button};
  }
`;

export const CancelButton = styled(ConfirmButton)`
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};

  :hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
