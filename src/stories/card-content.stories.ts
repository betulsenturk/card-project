import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './card-content';

export default {
    title: 'CardContent',
    component: 'card-content',
    argTypes: {
      content: { control: 'text' },
      fontSize: { control: { type: 'radio', }, options: ['small', 'medium', 'large'] },
    },
    args: {
        content: 'This is the content of the card.',
        fontSize: 'medium', 
      },
    
  } as Meta;
  
  const Template: StoryFn = ({ content, fontSize }) => html`

    <card-content .content="${content}" .fontSize="${fontSize}"></card-content>
  `;
  
  export const Default = Template.bind({});
  
  export const Small = Template.bind({});
  Small.args = {
    fontSize:"small",
  };

  export const Large = Template.bind({});
  Large.args = {
    fontSize:"large",
  };