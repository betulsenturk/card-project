import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import './share-button';

export default {
    title: 'Share Button',
    component: 'share-button',
    argTypes:{
        clicked: { control: 'boolean' },
        clickedColor: {control: 'color'},
      }
  } as Meta;

  const Template: StoryFn = (args) => html`
  <share-button .clicked="${args.clicked}" .clickedColor="${args.clickedColor}" ></share-button>
`;

export const Default = Template.bind({});
Default.args = {
    clicked: false,
    clickedColor: "#007acc",
};
