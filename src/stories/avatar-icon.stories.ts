import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './avatar-icon';


export default {
    title: 'Avatar Icon',
    component: 'avatar-icon',
    argTypes:{
        src: { control: 'text' },
        name: { control: 'text' },
        backgroundColor: { control: 'color' },
        size: { control: {type: 'radio'}, options: ["small", "medium", "large"]},
      }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <avatar-icon .size="${args.size}" .src="${args.src}" .alt="${args.name}" .backgroundColor="${args.backgroundColor}"></avatar-icon>
`;

export const Default = Template.bind({});
Default.args = {
  src: '',
  name: 'Shrimp and Chorizo Paella',
  backgroundColor: 'green',
  size: "medium",
};