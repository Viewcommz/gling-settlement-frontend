import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDown from "./Dropdown";

export default {
  title: 'components/modules/dropdown',
  component: DropDown
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems : [
    {
      id:1,
      menuName:'마이페이지',
    },
    {
      id:2,
      menuName:'문의하기',
    },
    {
      id:3,
      menuName:'로그아웃',
    },
  ],
  showMenu: true
}