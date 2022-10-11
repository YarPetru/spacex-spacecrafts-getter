import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import { authOperations } from 'redux/auth';
import { getIsLoggedIn, getIsPendingState } from 'redux/auth';

import {
  FormWrapper,
  StyledForm,
  FieldWrapper,
  FieldName,
  AccentedMark,
  FormField,
  ValidationError,
  SubmitButton,
  SignupLink,
  RegisterLinkWrapper,
  IsRegistredParagraph,
  ClosedEyeIcon,
  OpenEyeIcon,
} from './LoginForm.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .min(10, 'Email must contain at least 10 characters')
    .max(50, 'Email must contain no more than 50 characters')
    .matches(/^[a-zA-Z0-9]/, 'Email must start with letter or number')
    .matches(
      /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{2,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'The Email field can only contain Latin letters, numbers and signs, and at least 2 charachters before "@"'
    )
    .required('Email is a required field'),
  password: yup
    .string('Enter your password')
    .matches(/^[a-zA-Z0-9]/, 'Password must start with letter or number')
    .matches(
      /^([a-zA-Z0-9@.!#$%&’*+/=?^_`{|}~-])*$/,
      'Password must not contain spaces'
    )
    .min(5, 'Password is too short - should be 5 chars minimum')
    .max(30, 'Password must contain no more than 30 characters')
    .required('Password is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isPending = useSelector(getIsPendingState);

  const handleSubmit = (values, actions) => {
    const email = values?.email?.toLowerCase();
    const password = values?.password;

    dispatch(authOperations.logIn({ email, password }));

    isLoggedIn && actions.resetForm();
  };

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const toggleEye = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, touched }) => {
            return (
              <StyledForm name="LoginForm">
                <FieldWrapper>
                  <FieldName htmlFor="email">
                    Email <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <FormField
                    id="email"
                    name="email"
                    type="text"
                    placeholder="your@email.com"
                    autoComplete="off"
                  />
                  <ValidationError name="email" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="password">
                    Password <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <FormField
                    id="password"
                    name="password"
                    type={isVisiblePassword ? 'text' : 'password'}
                    placeholder="..."
                    autoComplete="off"
                  />
                  <ClosedEyeIcon
                    visibility={isVisiblePassword.toString()}
                    onClick={toggleEye}
                  />
                  <OpenEyeIcon
                    visibility={isVisiblePassword.toString()}
                    onClick={toggleEye}
                  />
                  <ValidationError name="password" component="div" />
                </FieldWrapper>

                <SubmitButton
                  type="submit"
                  disabled={(!touched.email && !touched.password) || !isValid}
                >
                  LogIn
                  {isPending && <PulseLoader color="white" size="4px" />}
                </SubmitButton>
                <RegisterLinkWrapper>
                  <IsRegistredParagraph>
                    Are you not registered yet?
                  </IsRegistredParagraph>
                  <SignupLink to="/signup">SignUp</SignupLink>
                </RegisterLinkWrapper>
              </StyledForm>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
