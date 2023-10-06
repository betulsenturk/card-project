import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './method-button';


export default {
    title: 'Method Button',
    component: 'method-button',
    argTypes:{
        clicked: { control: 'boolean' },
        text: {control: 'text'},
      }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <method-button .clicked=${args.clicked} .text="${args.text}"></method-button>
`;

export const Default = Template.bind({});
Default.args = {
  clicked: false,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ultricies nisl. Donec quis sapien in lorem vehicula interdum. Mauris quis porttitor metus. Donec in tellus a magna dictum sollicitudin. Suspendisse at tincidunt sapien. Curabitur nec diam in sem dictum ornare quis eu neque. Pellentesque et erat mattis, maximus metus euismod, ultrices libero. Sed id consectetur erat, in malesuada ex.', 
};