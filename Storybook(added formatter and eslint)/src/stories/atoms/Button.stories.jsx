import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button label="Hello Button" onClick={() => alert('Button clicked!')} />
  ))
  .add('with emoji', () => (
    <Button label="😀 😎 👍 💯" onClick={() => alert('Button clicked!')} />
  ));
