// By adding a PATH variable in .env, we have access to root by
// not including './' before an import's source path.
import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition, animated, config } from 'react-spring';
import { Portal, absolute } from 'Utilities';
// import { Icon, Card } from 'Elements';
import Icon from './Icon';
import { Card } from './Cards';


class Modal extends Component {

  render() {
    const { children, toggle, on } = this.props
    return (
      <Portal>
        <Transition
          // native is used to solve performance issues. It's also required
          // for interpolate to work.
          native
          from={{ opacity: 0, bgOpacity: 0, y: '-50px' }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: '0px' }}
          leave={{ opacity: 0, bgOpacity: 0, y: '50px' }}
        >
          {on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}, 0)`
                    ),
                    ...styles
                  }}>
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background
                  style={{
                    opacity: styles.bgOpacity.interpolate(
                      bgOpacity => bgOpacity
                    )
                  }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))}
        </Transition>
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

// This will adapt all styles from Card, but use 'animated.div' component.
const AnimCard = Card.withComponent(animated.div);

// This will use AnimCard to use Card style with react-spring's 'animated'.
const ModalCard = AnimCard.extend`
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

const Background = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

/*
  To extend a component that exist, use 'styled()' and pass it
  the existing component with a '.div' (or whatever element type)

    const myStyledComp = styled(animated.div)`
      myProperty: myValue;
    `;
*/
export default Modal;
// interpolate is a func that has callback func with a value

/*
  This is the code for ModalCard used in the tutorial. However, interpolate
  doesn't work for me at all.
  ******SOLVED*****
  - The Transition component needed the 'native' property for interpolate to
    work.

    <ModalCard
      style={{
        transform: styles.y.interpolate(
          y => `translate3d(0, ${y}, 0)`
        ),
        ...styles
      }}>


*/
