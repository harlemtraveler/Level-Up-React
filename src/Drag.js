import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Gesture } from 'react-with-gesture';
import { Spring, animate, interpolate } from 'react-spring';
import { Card } from 'Elements';

class Drag extends Component {

  render() {
    return (
      // Gesture tag won't work until the input of dep. coordinates.
      // The UI will not render until input of dependent coordinates.
      <Gesture>
        {/* Below are coordinates require for Gesture to work */}
        {({ down, xDelta }) => (

          // Sping takes a couple of values and interpolates them.
          <Spring
            to={{
              x: down ? xDelta : 0
            }}
            /*
              'immediate', a Boolean, contains things needed to be tied
              1-to-1 with motion. We'll use it to check if the mouse is
              pressed down and the value being changed is 'x'.
            */
            immediate={ name => down && name == 'x'}
          >

          {/* This gives access to 'x' and if True, provides Card 'x' value */}
          {({x}) => (
            <Card style={{
              transform: `translateX(${x}px)`
            }}>
              <h1>
                {down}, {xDelta}
              </h1>
            </Card>
          )}

          </Spring>

        )}
      </Gesture>
    );
  }

}

export default Drag;

/*
  What's happening above?

  The Gesture element intializes the coordinate and mouse action
  values ('down' and 'xDelta' for this example).

  Spring acts as a buffer, takes the initialized coordinate and
  mouse action values, and interpolates it to make available for
  its child elements.

  The Card element initializes a 'style' property with a value of
  the CSS 'transform' property.
  The value passed to the 'transform' porperty is 'translateX('x-pos')'
  function, enabling horizontal dragging, using the 'x' value passed
  all the way from the parent Gesture element.
*/

/*
  Manual element dragging feature:
  [+] transform porperty with value 'translate3d(x,y,z)' enables drag:

      transform: `translate3d(${xDelta}px, ${yDelta}px, 0)`

  [+] For a single coordinates 'X' (Can only drag horizontally):

      transform: `translateX(${xDelta}px)`

  [+] For a single coordinates 'Y' (Can only drag vertically):

      transform: `translateX(${yDelta}px)`
*/
