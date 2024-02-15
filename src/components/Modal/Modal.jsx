import { useEffect } from 'react';
import { ModalContainer, ModalOverlay } from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>
  );
};
