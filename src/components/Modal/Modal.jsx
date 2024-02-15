import { Component } from 'react';
import { ModalContainer, ModalOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </ModalOverlay>
    );
  }
}
