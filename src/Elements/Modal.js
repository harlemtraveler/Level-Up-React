// By adding a PATH variable in .env, we have access to root by
// not including './' before an import's source path.
import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
// import { Icon, Card } from 'Elements';
import Icon from './Icon';
import { Card } from './Cards';


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
  ${absolute({})};
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 250px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  ${absolute({
    y: 'top',
    x: 'right'
    })};
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

export default Modal;
