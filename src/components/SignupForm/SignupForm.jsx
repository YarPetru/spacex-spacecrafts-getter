import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import { authOperations } from 'redux/auth';
import { getIsLoggedIn } from 'redux/auth';
import { getFetchingCurrent } from 'redux/auth';

import {
  FormWrapper,
  Overlay,
  StyledForm,
  FieldWrapper,
  FieldName,
  AccentedMark,
  StyledField,
  ValidationError,
  SubmitButton,
  LoginLink,
  IsRegistredParagraph,
  LoginLinkWrapper,
} from './SignupForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .matches(/^[a-zA-Z0-9]/, 'Name must starts with letter or number')
    .min(3, 'Name must contain at least 3 characters')
    .max(100, 'Name must contain no more than 100 characters')
    .required('Name is a required field'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .min(10, 'Email must contain at least 10 characters')
    .max(50, 'Email must contain no more than 50 characters')
    .matches(/^[a-zA-Z0-9]/, 'Name must start with letter or number')
    .matches(
      /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{2,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'The Email field can only contain Latin letters, numbers and signs, and at least 2 charachters before "@"'
    )
    .required('Email is a required field'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password is too short - should be 5 chars minimum')
    .max(30, 'Password must contain no more than 30 characters')
    .required('Password is a required field'),
  repeatPassword: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is a required field'), //можна додати npm yup-password
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetching = useSelector(getFetchingCurrent);

  const handleSubmit = (values, actions) => {
    dispatch(authOperations.register(values));

    isLoggedIn && actions.resetForm();
  };

  return (
    <>
      <Overlay />
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, touched }) => {
            return (
              <StyledForm name="SignupForm">
                <FieldWrapper>
                  <FieldName htmlFor="name">
                    Name <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="..."
                    autoComplete="off"
                  />
                  <ValidationError name="name" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="email">
                    Email <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="off"
                  />
                  <ValidationError name="email" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="password">
                    Password <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="password"
                    name="password"
                    type="password"
                    maxLength="30"
                    placeholder="..."
                    autoComplete="off"
                  />

                  <ValidationError name="password" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="repeatPassword">
                    Confirm password <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    placeholder="..."
                    autoComplete="off"
                    onPaste={e => e.preventDefault()}
                  />
                  <ValidationError name="repeatPassword" component="div" />
                </FieldWrapper>

                <SubmitButton
                  type="submit"
                  disabled={
                    (!touched.name &&
                      !touched.email &&
                      !touched.password &&
                      !touched.repeatPassword) ||
                    !isValid
                  }
                >
                  SignUp
                  {isFetching && <PulseLoader color="white" size="4px" />}
                </SubmitButton>
                <LoginLinkWrapper>
                  <IsRegistredParagraph>
                    Are you already registered?
                  </IsRegistredParagraph>
                  <LoginLink to="/login">LogIn</LoginLink>
                </LoginLinkWrapper>
              </StyledForm>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default SignupForm;
