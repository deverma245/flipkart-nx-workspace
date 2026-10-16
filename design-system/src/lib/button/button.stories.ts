import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';
import { expect } from 'storybook/test';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/button/gi)).toBeTruthy();
  },
};
