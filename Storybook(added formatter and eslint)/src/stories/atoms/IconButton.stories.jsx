import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';

import IconButton from './IconButton';

export default {
  title: 'Icon',
};

export const CheckIcon = () => (
  <IconContext.Provider value={{ size: '24px' }}>
    <FaCheck />
  </IconContext.Provider>
);

export const CheckIconButton = () => (
  <IconButton onClick={action('clicked')}>
    <IconContext.Provider value={{ size: '24px' }}>
      <FaCheck />
    </IconContext.Provider>
  </IconButton>
);
