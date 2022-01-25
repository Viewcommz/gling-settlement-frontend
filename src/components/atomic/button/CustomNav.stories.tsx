import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomNav } from 'components/modules/navBar/navBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default {
  title: 'components/modules/CustomNav',
  component: CustomNav,
} as ComponentMeta<typeof CustomNav>;

const Template: ComponentStory<typeof CustomNav> = (args) => (
<CustomNav {...args} /> 
)    
export const Primary = Template.bind({});
Primary.args = {
  title:'hi',
  to: '/'
}