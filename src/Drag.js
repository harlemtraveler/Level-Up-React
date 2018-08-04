import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Gesture } from 'react-with-gesture';
import { Card } from 'Elements';

class Drag extends Component {

  render() {
    return (
      // Gesture tag won't work until the input of dep. coordinates.
      // The UI will not render until input of dependent coordinates.
      <Gesture>
        {/* Below are coordinates require for Gesture to work */}
        {({ down, x, y, xDelta, yDelta, xInitial, yInitial }) => (
          <Card>
            <h1>
              {down}, {x}, {y}, {xDelta}, {yDelta}, {xInitial}, {yInitial}
            </h1>
          </Card>
        )}
      </Gesture>
    );
  }

}

export default Drag;
