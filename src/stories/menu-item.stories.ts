import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './method-button';


export default {
    title: 'Menu Item',
    component: 'menu-item',
    argTypes:{
        clicked: { control: 'boolean' },
        numberOfLinks: { control: 'number'},
      }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <menu-item .numberOfLinks=${args.numberOfLinks} .clicked=${args.clicked}></menu-item>
`;

export const Default = Template.bind({});
Default.args = {
  clicked: false,
  numberOfLinks: 3,
};