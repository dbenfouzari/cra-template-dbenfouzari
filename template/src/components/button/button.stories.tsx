import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const All = () => (
  <>
    <Text />
    <Hovered />
    <Focused />
    <Disabled />
  </>
);

export const Text = () => <Button onClick={action('clicked')}>Normal</Button>;

export const Hovered = () => (
  <Button onClick={action('clicked')} hover>
    Hello Button
  </Button>
);

export const Focused = () => (
  <Button onClick={action('clicked')} focus>
    Hello Button
  </Button>
);

export const Disabled = () => (
  <Button onClick={action('clicked')} disabled>
    Hello Button
  </Button>
);
