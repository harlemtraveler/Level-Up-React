// By adding a PATH variable in .env, we have access to root by
// not including './' before an import's source path.
import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, Icon } from 'Utilities';
import { Card } from 'Elements';


class Modal extends Component {

  render() {
    const { children, toggle, on } = this.props
    return (
      <Portal>
        { on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }

}
const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  padding: 15px;
  min-width: 320px;
  z-index: 10;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 250px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

export default Modal;
