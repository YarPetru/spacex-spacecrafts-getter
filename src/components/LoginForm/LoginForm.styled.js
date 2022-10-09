import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import {
  StyledLink,
  StyledField,
} from 'components/CommonComponents/CommonComponets.styled';

import device from 'styles/device';

export const FormWrapper = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.desktop} {
    padding: 60px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.transparentDarkblue};
`;

export const StyledForm = styled(Form)`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${p => p.theme.borders.mainBorderRadius};

  @media ${device.mobile} {
    padding: 32px 20px;
    width: 320px;
  }

  @media ${device.tablet} {
    padding: 40px;
    width: 400px;
    background-color: ${p => p.theme.colors.white};
  }

  @media ${device.desktop} {
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const FieldName = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${p => p.theme.colors.white};

  @media ${device.mobile} {
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-weight: 500;
    color: ${p => p.theme.colors.secondaryFont};
  }

  @media ${device.desktop} {
  }
`;

export const AccentedMark = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const FormField = styled(StyledField)`
  font-family: inherit;
`;

export const ValidationError = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 600;
  color: ${p => p.theme.colors.accent};
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.borders.buttonsBorderRadius};
  background-color: ${p => p.theme.colors.transparentAccent};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: ${p => p.theme.transition.transitionFunction};

  :hover {
    background-color: ${p => p.theme.colors.accent};
  }

  :disabled {
    background-color: ${p => p.theme.colors.placeholderFont};
    cursor: not-allowed;
  }
`;

export const SignupLink = styled(StyledLink)``;

export const RegisterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

export const IsRegistredParagraph = styled.p`
  color: ${p => p.theme.colors.secondaryFont};
`;
