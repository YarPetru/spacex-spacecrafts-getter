import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { GoEyeClosed, GoEye } from 'react-icons/go';
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

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.desktop} {
    padding: 60px;
  }
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
`;

export const FieldWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  color: ${p => p.theme.colors.secondaryFont};
`;

export const FieldName = styled.label`
  margin-bottom: 8px;
  font-size: 16px;

  @media ${device.mobile} {
    color: ${p => p.theme.colors.white};
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-weight: 500;
    color: ${p => p.theme.colors.secondaryFont};
  }
`;

export const AccentedMark = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const FormField = styled(StyledField)`
  font-family: inherit;
  font-weight: 500;
  color: ${p => p.theme.colors.secondaryFont};

  ::placeholder {
    color: ${p => p.theme.colors.placeholderFont};
  }
`;

export const ClosedEyeIcon = styled(GoEyeClosed)`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 36px;
  opacity: ${props => (props.visibility === 'true' ? 1 : 0)};

  color: currentColor;
  cursor: pointer;
`;

export const OpenEyeIcon = styled(GoEye)`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 36px;

  opacity: ${props => (props.visibility === 'false' ? 1 : 0)};

  color: currentColor;
  cursor: pointer;
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

export const LoginLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

export const LoginLink = styled(StyledLink)``;

export const IsRegistredParagraph = styled.p`
  color: ${p => p.theme.colors.secondaryFont};
`;
