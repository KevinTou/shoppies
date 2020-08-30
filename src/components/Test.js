import React from 'react';
import { Draggable, Droppable } from '@shopify/draggable';

const Test = () => {
  React.useEffect(() => {
    const droppable = new Droppable(document.querySelectorAll('.container'), {
      draggable: '.item',
      dropzone: '.dropzone',
    });

    droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
    droppable.on('droppable:returned', () => console.log('droppable:returned'));
  }, []);

  return (
    <div>
      <h1>test</h1>
      <p>Some other text</p>
      <div class="container">
        <div class="dropzone draggable-dropzone--occupied">
          <div class="item">A</div>
        </div>
        <div class="dropzone draggable-dropzone--occupied">
          <div class="item">B</div>
        </div>
        <div class="dropzone draggable-dropzone--occupied">
          <div class="item">C</div>
        </div>
      </div>

      <div class="container">
        <div class="dropzone"></div>
      </div>
    </div>
  );
};

export default Test;
