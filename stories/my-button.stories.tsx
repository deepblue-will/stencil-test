export default {
  title: 'Button',
  argTypes: {
    danger: { control: { type: 'boolean' }}
  },
};

const Template = args => {
  return <my-button-group>
    <my-button type="primary" {...args}>Primary</my-button>
    <my-button {...args}>Default</my-button>
    <my-button type="dashed" {...args}>Dashed</my-button>
  </my-button-group> 
};

export const Default = Template.bind({});

export const Danger = Template.bind({});
Danger.args = { danger: true }