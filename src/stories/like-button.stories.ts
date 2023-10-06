import {html} from 'lit';
import {LikeButton} from './like-button';
import { StoryFn, Meta } from '@storybook/web-components';


export default {
  title: 'LikeButton',
  component: 'like-button',
  argTypes: {
    liked: { control: 'boolean' },
    likedColor: { control: 'color' },
    unlikedColor: { control: 'color' },
  },
} as Meta;

const Template:StoryFn = (args:LikeButton) => html`
  <like-button
    .liked="${args.liked}"
    .likedColor="${args.likedColor}"
    .unlikedColor="${args.unlikedColor}"
  ></like-button>
`;

export const Default = Template.bind({}) 
Default.args = {
  liked: false,
  likedColor: 'red',
  unlikedColor: '#757575',
};

export const Liked = Template.bind({});
Liked.args = {
  liked: true,
  likedColor: 'red',
  unlikedColor: '#757575',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  liked: false,
  likedColor: '#00FF00',
  unlikedColor: '#0000FF',
};


