import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Widget } from './Widget';

export default {
  title: 'Example/Widget',
  component: Widget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Widget {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});
