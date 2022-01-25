import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/atomic/button/Button';

export default {
  title: 'components/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: 'primary'
}