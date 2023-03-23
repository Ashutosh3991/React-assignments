import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './CheckBox';

storiesOf('Checkbox', module)
  .add('unchecked', () => (
    <Checkbox label="Unchecked Checkbox" checked={false} onChange={() => {}} />
  ))
  .add('checked', () => {
    const [isChecked, setIsChecked] = useState(true);
    const handleChange = () => setIsChecked(!isChecked);
    return (
      <Checkbox
        label="Checked Checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    );
  });
