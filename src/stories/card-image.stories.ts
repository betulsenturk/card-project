import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './card-image';


export default {
    title: 'Card Image',
    component: 'card-image',
    argTypes:{
        imgUrl: { control: 'text' },
      }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <card-image .imgUrl="${args.imgUrl}" ></card-image>
`;

export const Default = Template.bind({});
Default.args = {
    imgUrl: 'https://mui.com/static/images/cards/paella.jpg',
};
