import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Card } from 'Elements';

class Drag extends Component {

  render() {
    return (
      <Draggable>
        <Card>
          <h1>Drag</h1>
        </Card>
      </Draggable>
    );
  }

}

export default Drag;
