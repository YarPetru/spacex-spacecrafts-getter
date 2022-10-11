import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  Overlay,
  ModalWrapper,
  ConfirmationText,
  ButtonsWrapper,
  ConfirmButton,
  CancelButton,
} from './LogoutModal.styled';

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    e.code === 'Escape' && onClose();
  };

  const handleOverlayClick = e => {
    e.currentTarget === e.target && onClose();
  };

  const onLogout = () => {
    dispatch(authOperations.logOut());
    onClose();
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <ModalWrapper>
          <ConfirmationText>Are you shure you want to logout?</ConfirmationText>
          <ButtonsWrapper>
            <ConfirmButton onClick={onLogout}>Exit</ConfirmButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ButtonsWrapper>
        </ModalWrapper>
      </Overlay>
    </>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LogoutModal;
