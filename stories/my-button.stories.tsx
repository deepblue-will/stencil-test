export default {
  title: 'Demo/MyComponent',
  argTypes: {
    danger: { control: { type: 'boolean' }}
  },
};

const Template = args => {
  return <div style={{display:'flex',gap:'4px'}}>
    <my-button type="primary" {...args}>Primary</my-button>
    <my-button {...args}>Default</my-button>
    <my-button type="dashed" {...args}>Dashed</my-button>
  </div> 
};

export const Default = Template.bind({});

export const Danger = Template.bind({});
Danger.args = { danger: true }