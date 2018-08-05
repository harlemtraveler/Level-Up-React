import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { Gesture } from 'react-with-gesture';
// The 'interpolate' import allows us to interpolate multiple values
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  height: 300px;
  positon: absolute;
`;

const CardContainer = styled.div`
  position: relative;
  background: #ccc;
  max-width: 320px;
  margin: 0 auto;
  border-radius: 5px;
`;

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
            // 'native' enables 'interpolate' to work!!!
            // And sheds the CPU workload!!!
            native
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
          {({ x }) => (
            <CardContainer>
              <DragCard
                style={{
                  // 'interpolate' turns passed values into Objects.
                  transform: interpolate(
                    [
                      x,
                      x.interpolate({
                        range: [-300, 300],
                        output: [-45, 45],
                        extrapolate: 'clamp'
                      })
                    ],
                    (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                  )
                }}
              >
                <h1>
                  {down}, {xDelta}
                </h1>
              </DragCard>
            </CardContainer>
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
  The value passed to the 'transform' property is 'translateX('x-pos')'
  function, enabling horizontal dragging, using the 'x' value passed
  all the way from the parent Gesture element.
*/

/*
  Interpolate:
  [+] What's going on in the style property?
    We are using the 'transform' CSS property to create animations.

  [+] What's the step by step process of the interpolate() function
    below?

    1.  interpolate takes in an array of different values.

    2.  The first value is the value being interpolated and the second
        value is the second value being interpolated.

    3.  We want to use the 'x' value (the first value) to determine a
        rotation (The further it's in specified a direction, the more
        it'll rotate in that direction).

    4.  For this animation, both the first and second value will be
        'x' (the passed value from the parent element).

    5.  A comma is placed after the array. So, after the interpolate
        function, another function is triggered.

    6.  The function following the interpolation function, will output
        the interpolated value from 'x' (the very first one) and
        whatever the second one may be.

    7.  At this point, we can rename the values in the second function.
        We'll rename the second value to 'rotate', since we'll be using
        that value to rotate the element.

    8.  Now, the second function will an arrow function, so place an
        arrow immediately after the parentheses containeing our two
        values.

    9.  The output of the arrow function will be two CSS animation
        properties.

    10. The first will be the 'translateX(...px)' CSS property to enable the
        emelement to be dragged horizontally.

          `translateX(${x}px)

    11. The second will be the 'rotate(...deg)' CSS property to enable the
        emelement to be rotated on click-drag.

  [+] Control the rotation of the element:

    12. Now, in the first array passed to the interpolate function, we're
        going to add another interpolate function to the second value in
        the array.

          transform: interpolate(
            [x, x.interpolate()],

    13. For this second function, we're going to pass in three properties
        from the 'interpolate' library.

          transform: interpolate(
            [
              x,
              x.interpolate({
                range: [],
                output: [],
                extrapolate: ''
              })
            ],

    14. The first interpolate property will be 'range', which is passed two
        numeric values, indicating how far the element can go in either
        direction:

          range: [-300, 300],

    15. Then, for the second interpolate property, what's happening is that
        we're taking the numbers from range ('-300'-'300'), and converting
        them into numbers that can fit into the output value range specified
        (in this case it's '-45'-'45'). The new number range from the output
        will be used as degrees for the element's rotation (45° for both
        directions):

          output: [-45, 45]

    16. The third interpolate property, 'extrapolate', has a few arguments
        that can be used as values. However, for the purpose of this element,
        we'll used the 'clamp' argument. The 'clamp' value will pevent the
        element from going past the specified rotational degrees (45deg in
        this case).

          extrapolate: 'clamp'




    <DragCard
      style={{
        transform: interpolate(
          [x, x],
          (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
        )
      }}
    >
*/

/*
  Manual element dragging feature:
  [+] transform property with value 'translate3d(x,y,z)' enables drag:

      transform: `translate3d(${xDelta}px, ${yDelta}px, 0)`

  [+] For a single coordinates 'X' (Can only drag horizontally):

      transform: `translateX(${xDelta}px)`

  [+] For a single coordinates 'Y' (Can only drag vertically):

      transform: `translateX(${yDelta}px)`
*/
