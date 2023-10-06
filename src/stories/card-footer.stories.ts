import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './card-footer';


export default {
    title: 'Card Footer',
    component: 'card-footer',
    argTypes:{
      size: { control: {type: 'radio'}, options: ["small", "medium", "large"]},
    }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <card-footer .size="${args.size}" .text="${args.text}"></card-footer>
`;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ultricies nisl. Donec quis sapien in lorem vehicula interdum. Mauris quis porttitor metus. Donec in tellus a magna dictum sollicitudin. Suspendisse at tincidunt sapien. Curabitur nec diam in sem dictum ornare quis eu neque. Pellentesque et erat mattis, maximus metus euismod, ultrices libero. Sed id consectetur erat, in malesuada ex.', 
  size: 'medium',
};

