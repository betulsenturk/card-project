import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './card-header';


export default {
    title: 'Card Header',
    component: 'card-header',
    argTypes:{
        cardTitle: { control: 'text' },
        date: { control: 'text' },
        size: { control: {type: 'radio'}, options: ["small", "medium", "large"]},
      }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <card-header .size="${args.size}"  .cardTitle="${args.cardTitle}" .date="${args.date}"></card-header>
`;

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Shrimp and Chorizo Paella',
  date: 'September 14, 2016',
  size: 'medium',
};

